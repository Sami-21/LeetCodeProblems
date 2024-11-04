function countStudents(students: number[], sandwiches: number[]): number {
  let counter = 0;
  let i:number = 0;
  while (counter != students.length && students.length >0) {
    if (students[0] === sandwiches[i]) {
      students.shift();
      i++
      counter = 0;
    } else {
      const first = students.shift();
      if (first !=undefined) students.push(first);
      counter++;
    }
  }
  return students.length;
}
