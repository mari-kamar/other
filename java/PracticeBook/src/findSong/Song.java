package findSong;

public class Song {

  String title;
  String artist;

  void play() {
    System.out.println("Artist: " + artist);
    System.out.println("Title: " + title);
  }

  public void setArtist(String artist) {
    this.artist = artist;
  }

  public void setTitle (String title) {
    this.title = title;
  }
}
