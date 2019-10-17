package Tutorial6;

public class CalcAreaTestDrive {

  String time;

  void setTime(String time) {
    this.time = time;
  }

  String getTime () {
    return time;
  }

  int go (int arg) {
    arg = arg*2;
    return arg;
  }

  public static void main (String[] args) {
    CalcArea calculator = new CalcArea();
    System.out.println(calculator.calculation(7, 12));


    //int f = calculator.calculation(t, 17);

    //int g = calculator.calculation();

    //calculator.calculation();

    //byte h = calculator.calculation(4, 20);

    /*int orig = 42;
    CalcAreaTestDrive x = new CalcAreaTestDrive();
    int y = x.go(orig);
    System.out.println(orig + ' ' + y);*/

    CalcAreaTestDrive clock = new CalcAreaTestDrive();
    clock.setTime("12345");

    String timeout = clock.getTime();
    System.out.println("time is " + timeout);


  }
}
