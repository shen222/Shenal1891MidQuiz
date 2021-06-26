function Arrayfunc() {
    var movies = ['Joker', 'Raw 2016', 'Batman Begins', 'Dracula', 'Martys'];

    if (movies[3].charAt(0) == 'I') {
        console.log("yay");
    }else{
        console.log("Nay");
    }
    
    var movies = [];
    
    var movies = ['Joker', 'Raw 2016', 'Batman Begins'];
    
    movies.push('iron man');
    
    console.log(movies);
}

function ObjectFunc() {
    var Car = {
        model: 'GTR',
        color: 'Black',
        price: 70
    };
    
    if(Car.price > 50) {
        console.log("Expensive");
    }else{
        console.log("Affordable");
    }
    
    console.log(Car.color);
}

Arrayfunc();
ObjectFunc();