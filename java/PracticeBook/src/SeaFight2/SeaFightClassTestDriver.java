package SeaFight2;

public class SeaFightClassTestDriver {

  public static void main (String[] args) {


    int numOfGuesses = 0;

    GameHelper helper = new GameHelper();
    SeaFightClass game = new SeaFightClass();

    int randomNum = (int) (Math.random()*5);
    int[] locationCells = {randomNum, randomNum+1, randomNum+2};
    game.setLocationCells(locationCells);
    boolean isAlive = true;


    while (isAlive == true) {
      String usersGuess = helper.getUserInput("Insert number: ");
      String result = game.checkYourself(usersGuess);


      System.out.println(result);
      numOfGuesses++;

      if (result.equals("All destroyed")) {
        isAlive = false;
        System.out.println("You spend " + numOfGuesses + " steps");
      }
    }




  }
}
