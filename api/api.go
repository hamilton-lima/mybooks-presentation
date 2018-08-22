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

	r.POST("/books", func(c *gin.Context) {
		var book Book
		c.BindJSON(&book)
		books = append(books, book)

		c.JSON(200, book)
	})

	r.Run()
}
