package Tutorial1;

public class App {
  public static void main(String[] args) {
    Echo el  = new Echo();
    Echo e2 = new Echo();
    int x = 0;

    while (x<4) {
      el.hello();
      el.count = el.count + 1;
      if (x == 3) {
        e2.count = e2.count + 1;
      }
      if (x > 0) {
        e2.count = e2.count + el.count;
      }
      x = x + 1;
    }
    System.out.println(e2.count);
  }
}
