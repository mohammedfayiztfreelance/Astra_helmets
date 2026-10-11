import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
}

export function ProductCard({
  name,
  category,
  price,
  image,
}: ProductCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm bg-zinc-950 border border-white/10 transition-all duration-500 hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-950/40">
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-108 contrast-[1.08] brightness-[1.05] group-hover:brightness-[1.12]"
        />

        {/* NEW BADGE */}
        <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-red-600/40">
          <span className="text-[11px] font-bold tracking-[0.2em] text-red-500 uppercase">
            NEW
          </span>
        </div>

        {/* DESKTOP HOVER OVERLAY BUTTONS */}
        <div className="hidden md:flex absolute inset-x-0 bottom-4 z-10 items-center justify-center gap-3 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 px-4">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-[0.15em] py-2.5 px-4 transition-all duration-200 uppercase shadow-lg shadow-red-900/50 cursor-pointer"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>ADD TO CART</span>
          </button>
          <button
            type="button"
            aria-label="Quick View"
            className="flex items-center justify-center bg-black/90 hover:bg-black text-white p-2.5 border border-white/20 transition-all duration-200 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CARD DETAILS */}
      <div className="flex flex-col p-5 bg-zinc-950 border-t border-white/10">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-extrabold tracking-wider text-white uppercase group-hover:text-red-500 transition-colors">
              {name}
            </h3>
            <p className="mt-1 text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">
              {category}
            </p>
          </div>
          <p className="text-sm font-extrabold tracking-wider text-red-500 whitespace-nowrap">
            {price}
          </p>
        </div>

        {/* MOBILE ALWAYS-VISIBLE ACTION BUTTON (VISIBLE ON MOBILE ONLY) */}
        <div className="mt-4 flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-red-600 active:bg-red-700 text-white text-xs font-bold tracking-[0.15em] py-2.5 px-4 uppercase shadow-md cursor-pointer"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>ADD TO CART</span>
          </button>
          <button
            type="button"
            aria-label="Quick View"
            className="flex items-center justify-center bg-zinc-900 text-white p-2.5 border border-white/20 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;