// stats.js

const createValues = () => {
    let data = getDataFromTextArea();
    data = data.split(',');
    
    let x = mean(data); // data mean
    
    let y = standardDeviation(data, x); // standard deviation
    let z = y**2;
    

    let dataObject = {
        mean: x,
        standardDeviation: y,
        variance: z
    }

    console.log(dataObject);
    updateValues(dataObject);
    return dataObject;
}

const updateValues = (x) => {
    let m = document.getElementById('mean');
    let s = document.getElementById('stddev');
    let v = document.getElementById('variance');

    m.innerText = 'Mean: ' + x.mean;
    s.innerText = 'Standard Deviation: ' + x.standardDeviation;
    v.innerText = 'Variance: ' + x.variance;
}

function getDataFromTextArea() {
    var data = document.getElementById('list1').value;
    console.log(data);
    return data;
}

const mean = (list) => {
    
    num = 0;
    
    for (var i = 0; i < list.length; i++) {
        num += parseInt(list[i]);
    }
    console.log(num);
    return num/list.length;   
}

const standardDeviation = (list, listMean) => {
    // formula std= sqrt((x-mean)^2/n-1)
    let num = 0;
    

    for (let i = 0; i < list.length; i++) {
        let value = (parseInt(list[i]) - listMean)**2
        num += value;
    };

    return Math.sqrt(num/list.length);
}

let eventTarget = document.getElementById('button');
eventTarget.addEventListener('click', createValues);


// Organized

// Get data from textarea
    // verify data in textarea
    // verify data is valid

// create an object with mean, median, mode, range, standard deviation

// display div setup for the answers to display with answers
    // add values to each html element mean: x median: x