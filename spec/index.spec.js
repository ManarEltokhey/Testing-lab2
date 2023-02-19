const index = require("../index");


describe("testing math utilities", () => {
    let pos_vals = [2,4];
    let neg_vals = [-6,-8];
    let vals = [2,4,-6,-8];
    let sum_of_vals = 6;

   
    beforeEach(() => {
        console.log(pos_vals, neg_vals, vals, sum_of_vals)

    })

    
    afterEach(() => {
        console.log("Done")
    })

   
    afterAll(() => function(){
        pos_vals = 0;
        neg_vals = 0;
        vals = 0;
        sum_of_vals = 0;
        return   console.log(pos_vals, neg_vals, vals, sum_of_vals)

    })

    it("sum function should equal to sum of the values", () => {
        expect(index.sum(pos_vals)).toEqual(sum_of_vals)


    });

    it("positive function should equal to positive values", () => {
        expect(index.positive(vals)).toEqual(pos_vals)


    });
});
