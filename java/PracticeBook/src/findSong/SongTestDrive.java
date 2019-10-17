package findSong;

public class SongTestDrive {

  public static void main (String[] args) {
    Song song1 = new Song();
    song1.setArtist("Travis");
    song1.setTitle("Love");

    Song song2 = new Song();
    song2.setArtist("Lavin");
    song2.setTitle("Disaster");

    song1.play();
    song2.play();
  }
}
