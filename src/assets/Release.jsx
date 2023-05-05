import TopHeader from "./TopHeader"
import InputField from "./InputField"
import Button from "./Button"
function Release() {
  return (
    <section className="flex flex-col py-14">
        <div>
        <TopHeader beauty="text-4xl leading w-8/12 mx-auto font-bold text-center py-10" text="Stay updated on the release"/>
        <TopHeader beauty="text-gray-400 text-center py-10 text-xl" text="Be the first to know when we start "/>
        </div>
        <div className="mx-auto w-9/12">
            <InputField type="text" placeholder="Email address" beautyInput="w-full outline-0 border-0" beautyContainer="border-2 border-gray-200 px-3 py-3 rounded"/>
            <Button text="Subscribe Now" beauty="bg-purple-700 text-white w-full mt-10 p-3 rounded"/>
        </div>
        
    </section>
  )
}

export default Release