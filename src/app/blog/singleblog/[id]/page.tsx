"use client"
import { useParams } from "next/navigation"; // Updated import
import Image from "next/image";

const SingleBlog = () => {
  const { id } = useParams(); // Get dynamic id from URL

  return (
    <section className="py-16">
      {/* Add the required width and height */}
      <div className="relative w-full" data-aos="flip-up">
        {/* Add border-top to create the red line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
        <Image
          src={"/blog/blog.png"}
          alt="banner"
          width={1509} // Set width based on the image dimensions
          height={512} // Set height based on the image dimensions
          className="w-full"
        />
      </div>

      <div className="container mx-auto px-4 2xl:px-0 text-center mt-10" data-aos="flip-up">
        <h1 className="text-4xl font-bold text-white mb-8">
          Single Blog {id}
        </h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          euismod ipsum, sagittis condimentum ex. Sed aliquam tellus malesuada
          nunc semper pulvinar. Mauris ac metus vel neque venenatis cursus ac
          mollis orci. Mauris auctor nec dui vel suscipit. Mauris varius massa
          ut tellus pretium fermentum. Sed lobortis mattis lorem, eu viverra
          est. Quisque non aliquam mi, non finibus arcu. Sed maximus odio nibh,
          et elementum mauris varius at. Nam congue nibh tortor. Etiam iaculis
          ante eu iaculis ultrices. Aliquam sed magna magna. Aliquam tellus
          justo, egestas et erat vitae, mattis molestie augue.
        </p>
        <p className="mb-6">
          Fusce egestas eget leo nec dapibus. Morbi feugiat mi nec tellus
          faucibus, dignissim feugiat lectus interdum. Sed dolor libero, mollis
          cursus convallis quis, ullamcorper eget felis. Suspendisse sit amet
          dolor diam. Pellentesque venenatis vulputate urna a scelerisque. Donec
          id tortor et ipsum ultrices bibendum. Sed laoreet volutpat odio. Proin
          a lobortis quam, vel malesuada nulla. Proin nec molestie sem. Duis sed
          nisi faucibus, molestie tortor sed, ullamcorper dolor. Ut at purus et
          nibh pretium eleifend non vitae mi. Donec vulputate eu nunc nec
          fermentum. Aenean nec fermentum purus. Phasellus ac quam lacus. Nam
          bibendum porttitor neque, quis molestie ante ullamcorper vel. In hac
          habitasse platea dictumst.
        </p>
        <p className="mb-6">
          Suspendisse vestibulum non lectus in mollis. Nulla interdum vulputate
          sem, ut finibus leo tristique tincidunt. Duis non lectus a purus
          suscipit faucibus ut vel turpis. Integer et cursus metus. Duis sodales
          posuere purus at facilisis. Donec ac mi non mi sodales efficitur sed
          nec tortor. Mauris ultricies molestie tortor vitae scelerisque.
          Aliquam vulputate libero a velit accumsan vehicula.
        </p>
      </div>
    </section>
  );
};

export default SingleBlog;
