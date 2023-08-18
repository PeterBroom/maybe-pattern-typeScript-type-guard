import './style.css';

const contentDiv: HTMLElement = document.getElementById('content');

type MaybeData = Data | DataNotFound;

class DataNotFound {
  found: false = false;
}
class Data {
  found: true = true;
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function returnMaybeData(exists: boolean): MaybeData {
  if (exists) {
    return new Data('Joe Bloggs', 42);
  } else {
    return new DataNotFound();
  }
}

// randomly return true or false for demo purposes
const maybeExists = Math.random() > 0.5;
const maybeData = returnMaybeData(maybeExists);

// set our type guard to see if the data is reachable
if (maybeData.found) {
  /*
   this forces the developer to check for 'found', 'name' and 'age' will only become available inside the if block.
  */
  contentDiv.innerHTML = `
    <p>Data exists: (${maybeExists})</p>
    <p>Name: ${maybeData.name}</p>
    <p>Age: ${maybeData.age}</p>
  `;
} else {
  contentDiv.innerHTML = `
      <p>Data exists: (${maybeExists})</p>
    `;
}
