package Tutorial4;

public class DogTestDrive {

  public static void main (String[] args) {
    Dog one = new Dog();
    one.setSize(70);

    Dog two = new Dog();
    two.setSize(16);

    Dog three = new Dog();
    three.setSize(5);

    Dog four = new Dog();

    Dog five = new Dog();

    one.bark(2);
    two.bark(1);
    three.bark(1);

    System.out.println(one.giveSize() + two.giveSize() + three.giveSize());

    one.infoDog("Bulka", one.getSize());

    one.setName("Tuzik");

    System.out.println(one.getName());

    five.setSize(122);
    five.bark(1);



  }
}
