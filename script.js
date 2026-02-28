let vm = new Vue({
    el: "#app",
    data: { message: "Hello, Vue" }
})
let vm01 = new Vue({
    el: "#app01",
    data: {message: "Текст"}     
            
})
let vm1 = new Vue({
    el:"#app1",
    data: { checked: true}
})

let vm2 = new Vue({          
    el: '#app2',
    data: { picked: 'Second'}

})
let vm3 = new Vue({
    el: '#app3',
    data: { language: 'Python' }
})
let vm4 = new Vue({
    el: "#app4",
    data: { n: 1,
        checked: true,
        message: "Разворот"
    }
})
let vm5 = new Vue({
    el: "#app5",
    data: {
        query: "робокоп"
    }
})
let vm6 = new Vue({
    el: "#app6",
    data: {
        headerStyle:{
            blue: false, underline: true

        }
    }

})

let vm7 = new Vue({
    el: "#app7",
    data: {
        sizeFactor: '1'
    }
})
let sample = [
    {text: 'Витя'},
    {text: 'Даня'},
    {text: 'Илья'}
]
let vm8 = new Vue({
    el: "#app8",
    data: {
        items: sample,
        n: 5
    }
})
        