// autotest for method https://swapi.dev/api/starships/5

pm.test("Ожидаю статус ответа 200", function() {pm.response.to.have.status(200);})

pm.test("Response time is less than 3000ms", function () {pm.expect(pm.response.responseTime).to.be.below(3000);});

pm.test("В статусе ответа есть слово ОК", function () {pm.response.to.have.status("OK");});

pm.test("В боди есть информация про грузовую вместительность", function () {
    pm.expect(pm.response.text()).to.include("cargo_capacity");
});
pm.test("Content-Type указано в хэдерах", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Является ли максимальная скорость в атмосфере равна 1000", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.max_atmosphering_speed).to.eql("1000");
});


// autotest for method https://swapi.dev/api/planets/7

pm.test("Ожидаю статус ответа 200", function() {pm.response.to.have.status(200);})

pm.test("Response time is less than 300ms", function () {pm.expect(pm.response.responseTime).to.be.below(300);});

pm.test("В статусе ответа есть слово ОК", function () {pm.response.to.have.status("OK");});

pm.test("В боди есть информация про климат", function () {
    pm.expect(pm.response.text()).to.include("climate");
});

pm.test("Content-Type указано в хэдерах", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Планета называется Endor", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Endor");
});

// autotest for method https://swapi.dev/api/people/10

pm.test("Ожидаю статус ответа 200", function() {pm.response.to.have.status(200);})

pm.test("Response time is less than 500ms", function () {pm.expect(pm.response.responseTime).to.be.below(500);});

pm.test("В статусе ответа есть слово ОК", function () {pm.response.to.have.status("OK");});

pm.test("В боди есть информация про рост", function () {
    pm.expect(pm.response.text()).to.include("height");
});
pm.test("Content-Type указано в хэдерах", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Персонаж мужского пола", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.gender).to.eql("male");
});