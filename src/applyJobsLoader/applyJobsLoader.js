import { getShoppingCart } from "../utilities/fakedb";

const applyJobsLoader = async () => {
  try {
    const res = await fetch("/jobs.json");
    const jobs = await res.json();

    const storeJobs = getShoppingCart();
    const saveJobs = [];
    for (const id in storeJobs) {
      const addedJobs = jobs?.find((pd) => pd.id === id);
      if (addedJobs) {
        saveJobs.push(addedJobs);
      }
    }
    return saveJobs;
  } catch (err) {
    console.log(err);
  }
};

export default applyJobsLoader;
