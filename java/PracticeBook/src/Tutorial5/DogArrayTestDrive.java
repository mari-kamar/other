package Tutorial5;

public class DogArrayTestDrive {

  public static void main (String[] args) {
    DogArray[] pets = new DogArray[7];

    pets[0] = new DogArray();
    pets[1] = new DogArray();

    pets[0].setSize(30);

    int x = pets[0].getSize();
    pets[1].setSize(8);

    pets[0].getInfo();
    pets[1].getInfo();

    PoorDog onePoor = new PoorDog();
    onePoor.getInfo();
    System.out.println("The dog size is : " + onePoor.getSize());
    System.out.println("The dog name is : " + onePoor.getName());
  }
}
