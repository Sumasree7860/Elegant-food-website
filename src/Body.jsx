import headerImage from "../src/headerImage.svg";
import cupcake from "../src/cupcake.svg";
import sectionImage from "../src/sectionImage.svg";
import offerImage from "../src/offerImage.png";

export default function Body() {
  return (
    <div className="w-full pr-5 pl-4 md:pl-16 md:pr-16">
      {/* first separation line */}
      <hr className="border-t-[1px] border-black h-px mt-4
       mb-2 md:mt-0 md:mb-2"></hr>
      {/*header quote line */}
      <div className="max-w-[700px] max-h-[50px] md:max-w-[996px] md:max-h-[85px] md:text-[25px] text-sm font-normal leading-normal mb-5 md:mb-[28px] flex">
        Indulge in moments of pure bliss with our heavenly treats – where every
        bite is a celebration and every flavor tells a story.
      </div>
      <img
        src={headerImage}
        className="mt-5 w-full object-cover rounded-[10px] mb-5 md:mb-[28px] md:mt-[28px]"
      />
      <button
        type="button"
        className="w-full rounded-[5px] bg-[#8C552C] font-bold text-white text-sm text-center p-2 md:text-xl uppercase mb-5 md:mb-[69px]
      "
      >
        VIEW CATALOGUE
      </button>
      {/* shop our best seller section */}
      <h4 className="text-black text-lg font-semibold underline first-letter:uppercase md:text-[30px]">
        Shop Our Best Seller
      </h4>
      {/* items */}
      <div className="flex gap-5 flex-col md:flex-row mt-[20px] md:gap-[30px] lg:gap-[40px] md:mt-[30px] md:justify-start md:flex-wrap items-center lg:flex-row lg:justify-start lg:flex-wrap">
        <BestSellerProduct />
        <BestSellerProduct />
        <BestSellerProduct />
        <BestSellerProduct />
      </div>
      {/* section-2 */}
      <div className="mt-[45px] md:mt-[60px] flex flex-col md:flex-col lg:flex-row gap-5 md:gap-[40px]">
        <img
          src={sectionImage}
          className="w-full object-cover rounded-[10px]"
        />
        <div className="flex flex-col gap-5 md:gap-[33px] lg:gap-[33px] ">
          <p className="text-[18px] md:text-[25px] font-semibold text-black md:leading-normal leading-tight">
            Indulge in sweetness, where every bite is a moment of joy, where
            cravings meet perfection
          </p>
          <p className="text-[12px] md:text-[15px] font-normal md:leading-normal leading-tight">
            ELEGANT FOODS is a delectable haven where muffins, doughnuts, and
            cakes come to life. Immerse yourself in a world of irresistible
            flavors, crafted with passion and precision to elevate every sweet
            moment.
          </p>
        </div>
      </div>
      {/* offer image */}

      <img
        src={offerImage}
        className="mt-[20px] md:mt-[36px] w-full object-cover mb-6 md:mb-[38px]"
      />
    </div>
  );
}

export function BestSellerProduct() {
  return (
    <div className="max-w-[300px] max-h-[450px] md:max-w-[346px] md:max-h-[487px] flex flex-col">
      <img src={cupcake} className="object-contain mb-2" />
      <p className="text-[15px] text-black font-medium leading-normal">
        Vanilla & Pineapple Cupcake
      </p>
      <p className="text-[15px] text-black font-bold">Rs 275.00</p>
    </div>
  );
}
