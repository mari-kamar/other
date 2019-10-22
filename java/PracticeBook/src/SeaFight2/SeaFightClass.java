package SeaFight2;

public class SeaFightClass {

  public int[] locationCells;
  public int numOfHits = 0;



  String checkYourself(String usersGuess) {
    int guess = Integer.parseInt(usersGuess);
    String result = "Wrong";

    for (int cell: locationCells) {
      if (cell == guess) {
        result = "Got it!";
        numOfHits++;
        break;
      }
    }

    if (numOfHits == locationCells.length) {
      System.out.println("All destroyed");
    }

    System.out.println(result);
    return result;
  }

  void setLocationCells(int[]locationCells) {
    this.locationCells = locationCells;
  }

}
