
exports.seed = async function(knex) {
  // Will reset Seed Data
  await knex("cars").truncate()

  await knex("cars").insert([
    { VIN: "00000000000000000", make: "Chevy", model: "Impala", mileage: 60000, transmission: "",  title: "" },
    { VIN: "00000000000000001", make: "Toyota", model: "Corolla", mileage: 50000, transmission: "Automatic",  title: "" },
    { VIN: "00000000000000002", make: "Honda", model: "Accord", mileage: 70000, transmission: "Automatic",  title: "Clean" },
    { VIN: "00000000000000003", make: "Ford", model: "Focus", mileage: 100000, transmission: "Manual",  title: "Clean" }
  ])
};
