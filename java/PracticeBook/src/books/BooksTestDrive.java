package books;

public class BooksTestDrive {
  public static void main(String[] args) {
    Books[] myBooks = new Books[3];
    myBooks[0] = new Books();
    myBooks[1] = new Books();
    myBooks[2] = new Books();
    int x = 0;
    myBooks[0].title = "something";
    myBooks[1].title = "about";
    myBooks[2].title = "Java";

    myBooks[0].author = "Bob";
    myBooks[1].author = "Kethy";
    myBooks[2].author = "Suzan";

    while (x < myBooks.length) {
      System.out.print(myBooks[x].title);
      System.out.print(", author ");
      System.out.println(myBooks[x].author);
      x = x + 1;
    }
  }
}
