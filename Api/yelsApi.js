import axios from 'axios';

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:
        "Bearer U-028p-gdvLT7WdaAWLmkwr33pUgODOB1f4FX6L88tGAoz3WZFOFckKn9HLcnz_6z4nPgG2nIT7xCP5MD86uGU5E6ar1HsdJ76eHeivIJDofgqSSMHQXSxhsOD30YXYx",
    }
});

