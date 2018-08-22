package main

import "github.com/gin-gonic/gin"

type Book struct {
	Name string
}

func main() {
	books := []Book{
		{Name: "Go Lang basics"},
		{Name: "Gin HTTP"},
	}

	r := gin.Default()
	r.GET("/books", func(c *gin.Context) {
		c.JSON(200, books)
	})

	r.Run()
}
