package book1;

public class BookTestDrive {

  public static void main(String[] args) {
    String[] islands = new String[4];
    int[] index = new int[4];

    islands[0] = "Bermudes";
    islands[1] = "Fidgi";
    islands[2] = "Azory";
    islands[3] = "Kosumel";

    index[0] = 1;
    index[1] = 3;
    index[2] = 0;
    index[3] = 2;

    //int ref;
    int y = 0;
    while (y < 4) {

      //ref = index[y];
      System.out.print("islands = ");
      System.out.println(islands[index[y]]);
      y = y+1;
    }
  }
}
