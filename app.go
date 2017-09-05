package main

import (
	"github.com/pressly/chi"
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

func Index(w http.ResponseWriter, r *http.Request) {
	indexTemplate, _ := template.ParseFiles("./index.html")
	_ = indexTemplate.Execute(w, nil)
}

func FileServer(r chi.Router, path string, root http.FileSystem) {
	if strings.ContainsAny(path, "{}*") {
		panic("FileServer does not permit URL parameters.")
	}

	fs := http.StripPrefix(path, http.FileServer(root))

	if path != "/" && path[len(path)-1] != '/' {
		r.Get(path, http.RedirectHandler(path+"/", 301).ServeHTTP)
		path += "/"
	}
	path += "*"

	r.Get(path, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fs.ServeHTTP(w, r)
	}))
}

func main() {
	router := chi.NewRouter()
	router.Get("/", Index)
	workDir, _ := os.Getwd()
	filesDir := filepath.Join(workDir, "public")
	FileServer(router, "/public", http.Dir(filesDir))
	router.NotFound(func(w http.ResponseWriter, r *http.Request) {
		indexTemplate, _ := template.ParseFiles("./index.html")
		_ = indexTemplate.Execute(w, nil)
	})
	log.Fatal(http.ListenAndServe(":3456", router))
}
