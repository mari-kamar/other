package com.company;

public class Main {

    int id = 0;

    public static void main(String[] args) {
      int x = 0;
      Main[] m = new Main[5];

      while (x < 3) {
          m[x] = new Main();
          m[x].id = x;
          x = x + 1;
      }
        m[3] = m[1];
        m[4] = m[1];
        m[3] = null;
        m[4] = m[0];
        m[0] = m[3];
        m[3] = m[2];
        m[2] = m[0];

        System.out.println(m[0]);
        System.out.println(m[1]);
        System.out.println(m[2]);
        System.out.println(m[3]);
        System.out.println(m[4]);

    }
}
