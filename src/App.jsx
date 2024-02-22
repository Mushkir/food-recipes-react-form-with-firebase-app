import TheNavBar from "./components/TheNavBar";
import FormInput from "./components/form/FormInput";
import FormSelect from "./components/form/FormSelect";
import FormTextArea from "./components/form/FormTextArea";
import FormURLInput from "./components/form/FormURLInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { collection, addDoc, getDocs } from "firebase/firestore";
// import { useEffect } from "react";
import { db } from "./firebase/index";
import { useEffect } from "react";

const schema = z.object({
  foodName: z
    .string()
    .min(3, { message: "Food Name must at least 3 characters" }),

  foodCategory: z.string().min(1, { message: "Category is required" }),
  desc: z
    .string()
    .min(15, { message: "Food Description must at least 15 characters" }),
  // foodUrl: z.string().url({ message: "Invalid url" }),
  author: z
    .string()
    .min(3, { message: "Author Name must at least 3 characters" })
    .max(20, { message: "Author Name can't exceed 20 characters" }),
});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const COLLECTION = "recipesInfo";

  const sendDataToServer = async (data) => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION), data);
      reset();
      console.log("Document written with ID: ", docRef.id);
      alert(
        `Dear ${data.author}! Thank you for using our platform. Your record has been successfully recorded!`
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log(data);
  };

  // useEffect(() => {
  //   async function getDataFromFirebase() {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     querySnapshot.forEach((doc) => {
  //       // console.log(`${doc.id} => ${doc.data()}`);
  //       console.log(doc);
  //     });
  //   }

  //   getDataFromFirebase();
  // }, []);

  return (
    <div className="font-Sen">
      <TheNavBar />
      <div className="bg-[#3E3232] min-h-screen">
        <form className="p-10" onSubmit={handleSubmit(sendDataToServer)}>
          <FormInput
            name="foodName"
            id="foodName"
            placeholder="Enter food name"
            label="Food Name:"
            register={register("foodName")}
            error={errors.foodName}
          />

          <FormSelect
            id="foodCategory"
            label="Food Category:"
            name="foodCategory"
            register={register("foodCategory")}
            error={errors.foodCategory}
          />

          <FormTextArea
            name="desc"
            id="desc"
            label="Food Description:"
            placeholder="Briefly describe about the food..."
            register={register("desc")}
            error={errors.desc}
          />

          <FormURLInput
            name="foodUrl"
            id="foodUrl"
            label="URL:"
            placeholder="Enter the URL of the food recipe (Optional)."
            register={register("foodUrl")}
            error={errors.foodUrl}
          />

          <FormInput
            name="author"
            id="author"
            label="Author:"
            placeholder="Enter your name / Author Name (If you entered URL)"
            register={register("author")}
            error={errors.author}
          />

          <button className="bg-[#A87C7C] px-5 py-2 rounded text-white hover:bg-[#976f6f] hover:font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
