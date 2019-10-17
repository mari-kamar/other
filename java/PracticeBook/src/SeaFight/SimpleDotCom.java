package SeaFight;

public class SimpleDotCom {

  int[] location;

  int numOfHits = 0;

  String checkYourself(String userGuess) {
    int guess = Integer.parseInt(userGuess);
    String result = "opps";

    for(int cell: location) {
      if (guess == cell) {
        result = "got";
        numOfHits = numOfHits + 1;
        break;
      }
    }

    if (numOfHits == location.length) {
      result = "finished";
    }
    System.out.println(result);
    return result;
  };

  void setLocationCells(int[] location) {
    this.location = location;
  }
}
