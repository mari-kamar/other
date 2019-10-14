package Tutorial2;

public class StringTestDriver {

  public static void main(String[] args) {
    StringTest string1 = new StringTest();
    StringTest string2 = new StringTest();

    string1.name = "joy";
    string1.age = 23;

    string2.name = "alisa";
    string2.age = 43;

    string1.showInfo();
    string2.showInfo();



  }
}
