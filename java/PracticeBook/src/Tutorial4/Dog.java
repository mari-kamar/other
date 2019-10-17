package Tutorial4;

public class Dog {
  private int size;
  String name;

  void bark(int numberOfBarks) {
    while (numberOfBarks > 0) {
      if (size > 60) {
        System.out.println("This is a big dog, because size is equal to " + size);
      } else if (size > 14) {
        System.out.println("This is a medium size dog, because size is equal to " + size);
      } else {
        System.out.println("This is a small dog, because size is equal to " + size);
      }

      numberOfBarks = numberOfBarks - 1;
    }
  }

  int giveSize() {
    return size;
  }

  void infoDog(String name, int size) {
    this.name = name;
    this.size = size;
    System.out.println("My dog name is " + name + " It have size about " + size);
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getSize() {
    return size;
  }

  public void setSize(int size) {
    this.size = size;
  }
}
