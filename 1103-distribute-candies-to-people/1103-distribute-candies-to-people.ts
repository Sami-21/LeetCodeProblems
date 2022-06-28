function distributeCandies(candies: number, num_people: number): number[] {
  let ans: number[] = new Array(num_people).fill(0);
  let givenCandy: number = 1;
  while (candies != 0) {
    for (let i: number = 0; i < num_people; i++) {
      if (givenCandy > candies) {
        ans[i] += candies;
        candies = 0;
      } else {
        ans[i] += givenCandy;
        candies -= givenCandy;
        givenCandy++;
      }
    }
  }
  return ans;
}
