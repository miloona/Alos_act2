const app = require('../index');
//assert 
let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);
//GET
describe("GET /Helipaddy", () => {
 it("respond with json containing a list of all Helipaddy", (done) => {
  chai.request(app)
      .get("/Helipaddy")
    

      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.length.should.not.be.eq(0);


        done();
      });
      });
});
//get by id
describe("GET /Helipaddy/:id", () => {
  it("respond with json containing a single Helipaddy", (done) => {
    chai.request(app)
      .get("/Helipaddy/62389c70029036d29800ab12")
     
      .end((err, response) => {
        response.should.have.status(200);

        response.body.should.be.a('object');
        response.body.should.have.property('id');
        response.body.should.have.property('profile');
        response.body.should.have.property('user');
        response.body.should.have.property('id').eq(1);


        done();
      });
      });
///  GET not_found"
  it("respond with json Helipaddy not found when the Helipaddy does not exists", (done) => {
    chai.request(app)
      .get("/Helipaddy/nonexistingHelipaddy")
    
      .end((err, response) => {
        response.should.have.status(404);
        response.text.should.be.eq('"Helipaddy_not_found"');

          done();
      });
  });
});
//POST
describe('POST /Helipaddy',  ()=>  {
 
  it('respond with 200 created',  (done) => {
    const data = {  
    
    email: "branch_duran@heli.com",
    username: "branch53",
    profile: {
      name: "Branch Duran",
      age: "53",
      country: "Andorra",
      picture: "http://placehold.it/32x32/picture/branch_duran/0",
      email: "branch_duran@heli.com",
      phone: "+119.97732",
      name_Helipaddy: "Allen ",
      expertise: "professional",
      Trip_price: "$70.17",
     "number_of_trips": 42
    },
    trip: {
      time_to_go: "2021-08-31T12:21:42.089Z",
      go_to: "Blackgum",
      flying_hours: 6,
      number_of_passengers: 5,
      Quality: "Good"
    }
    }
          chai.request(app)
          .post('/Helipaddy')
          .send(data)
          
          .end((err, response) => {
            response.should.have.status(200);
       response.body.should.be.a('object');
         response.body.should.have.property('email').eq("branch_duran@heli.com");
         response.body.should.have.property('username').eq("branch53");
           
         response.body.should.have.property('name').eq("Branch Duran");
         response.body.should.have.property('age').eq(53);
         response.body.should.have.property('country').eq("Andorra");
         response.body.should.have.property('picture').eq("http://placehold.it/32x32/picture/branch_duran/0");
         response.body.should.have.property('email').eq("branch_duran@heli.com");

         response.body.should.have.property('phone').eq("+119.97732");
         response.body.should.have.property('name_Helipaddy').eq("Allen");
         response.body.should.have.property('expertise').eq("professional");
         response.body.should.have.property('Trip_price').eq("$70.17");
         response.body.should.have.property('number_of_trips').eq(42);
           
         response.body.should.have.property('time_to_go').eq("2021-08-31T12:21:42.089Z");
         response.body.should.have.property('go_to').eq("Blackgum");
         response.body.should.have.property('flying_hours').eq(6);
         response.body.should.have.property('number_of_passengers').eq(5);
         response.body.should.have.property('Quality').eq("Good");



            done();
          });
  });
});

//// post  not created
describe('POST /Helipaddy',  () => {
  let data = {
     

      
          }
  it('respond with 400 not created',  (done)=>  {
    chai.request(app)
          .post('/Helipaddy')
          .send(data)
         
          
          .end((err, response) => {
            response.should.have.status(400);
            response.text.should.be.eq("Helipaddy not created");

              done();
          });
  });
});



///DELETE
describe('DELETE /Helipaddy/:id',  (done)=>  {
  it('Deletes a particular Helipaddy',  (done)=>  {
    chai.request(app)
  .delete('/Helipaddy/62389c70345ce60cf73a77ee')
  .end((err, response) => {
    response.should.have.status(200);

      done();
  });  
});
it('Deletes a particular Helipaddy',  (done)=>  {
  chai.request(app)
.delete('/Helipaddy/aaaaaaaaaaaaaaaaaaaaaaaa')
.end((err, response) => {
  response.should.have.status(400);
  response.text.should.be.eq('"Helipaddy_not_found"');

    done();
});  
});
  });


//PUT
  describe("PUT /Helipaddy/:id",  (done)=>  {
    it("Updates a particular Helipaddy",  (done)=>  {
      const Id = 12;
      const data = {  

      
        
        email: "branch_duran@heli.com",
    username: "branch53",
    profile: {
      name: "Branch Duran",
      age: "53",
      country: "Andorra",
      picture: "http://placehold.it/32x32/picture/branch_duran/0",
      email: "branch_duran@heli.com",
      phone: "+119.97732",
      name_Helipaddy: "Allen ",
      expertise: "professional",
      Trip_price: "$70.17",
      number_of_trips: 42
    },
    trip: {
      time_to_go: "2021-08-31T12:21:42.089Z",
      go_to: "Blackgum",
      flying_hours: 6,
      number_of_passengers: 5,
      Quality: "Good"
    }
  
    };
      chai.request(app)
    .put("/Helipaddy/"+ Id)
    .send(data)
    .end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
       
         response.body.should.have.property('email').eq("branch_duran@heli.com");
         response.body.should.have.property('username').eq("branch53");
           
         response.body.should.have.property('name').eq("Branch Duran");
         response.body.should.have.property('age').eq(53);
         response.body.should.have.property('country').eq("Andorra");
         response.body.should.have.property('picture').eq("http://placehold.it/32x32/picture/branch_duran/0");
         response.body.should.have.property('email').eq("branch_duran@heli.com");

         response.body.should.have.property('phone').eq("+119.97732");
         response.body.should.have.property('name_Helipaddy').eq("Allen");
         response.body.should.have.property('expertise').eq("professional");
         response.body.should.have.property('Trip_price').eq("$70.17");
         response.body.should.have.property('number_of_trips').eq(42);
           
         response.body.should.have.property('time_to_go').eq("2021-08-31T12:21:42.089Z");
         response.body.should.have.property('go_to').eq("Blackgum");
         response.body.should.have.property('flying_hours').eq(6);
         response.body.should.have.property('number_of_passengers').eq(5);
         response.body.should.have.property('Quality').eq("Good");
        done();
    });  
    });
    it("It should NOT PUT an existing Helipaddy ", (done) => {
      const Id = 12;
      const data = {
        email: "branch_duran@heli.com",
    username: "branch53",
    profile: {
      name: "Branch Duran",
      age: "53",
      country: "",
      picture: "http://placehold.it/32x32/picture/branch_duran/0",
      email: "branch_duran@heli.com",
      phone: "+119.97732",
      name_Helipaddy: "Allen ",
      expertise: "professional",
      Trip_price: "$70.17",
      number_of_trips: 42
    },
    trip: {
      time_to_go: "2021-08-31T12:21:42.089Z",
      go_to: "Blackgum",
      flying_hours: 6,
      number_of_passengers: 5,
      Quality: "Good"
      };
      chai.request(app)
          .put("/Helipaddy/" + Id)
          .send(data)
          .end((err, response) => {
            response.should.have.status(400);
            response.text.should.be.eq("non_PUT");
          done();
          });
  });
    });

