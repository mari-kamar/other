package game;

import java.util.Scanner;

public class Player {
  int number = 0;

  public void guess() {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter the number ");
    //number = (int) (Math.random() * 10);
    number = scanner.nextInt();
    System.out.println("I think this number is " + number);
  }
}
