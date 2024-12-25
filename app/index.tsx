import { Redirect } from "expo-router";

const Page = () => {
    const isSignedIn = false;
    
    if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

    return <Redirect href="/(public)/splash" />;
};

export default Page;