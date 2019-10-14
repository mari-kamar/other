package game;

public class GuessGame {
  Player p1;
  Player p2;
  Player p3;

  public void startGame() {
    p1 = new Player();
    p2 = new Player();
    p3 = new Player();

    int guessp1 = 0;
    int guessp2 = 0;
    int guessp3 = 0;

    boolean p1isRight = false;
    boolean p2isRight = false;
    boolean p3isRight = false;

    //create random number which player should guess
    int targetNumber = (int) (Math.random() * 10);
    System.out.println("I guessing number from 0 to 9..");


    while(true) {
      System.out.println("Number you should guess, - " + targetNumber);

      p1.guess();
      p2.guess();
      p3.guess();

      guessp1 = p1.number;
      System.out.println("The first player thinking is " + guessp1);

      guessp2 = p2.number;
      System.out.println("The second player thinking is " + guessp2);

      guessp3 = p3.number;
      System.out.println("The third player thinking is " + guessp3);

      if (guessp1 == targetNumber) {
        p1isRight = true;
      }
      if (guessp2 == targetNumber) {
        p2isRight = true;
      }
      if (guessp3 == targetNumber) {
        p3isRight = true;
      }

      if (p1isRight || p2isRight || p3isRight) {
        System.out.println("We have a winner!");
        System.out.println("The first player is right? " + p1isRight);
        System.out.println("The second player is right? " + p2isRight);
        System.out.println("The third player is right? " + p3isRight);
        System.out.println("The game is over!");
        break;
      } else {
        System.out.println("The players should try again!");
      }
    }
  }
}
