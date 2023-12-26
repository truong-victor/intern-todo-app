import { Link } from "react-router-dom"
import { AspectRatio } from "@chakra-ui/react";
import { useCallback } from "react";

function CoreProduct(props){
    return (
      <div className="w-[19%] p-[10px] bg-[#fff] border border-grey-400 shadow">  
        <Link to={`/product/${props.id}`}>
          <AspectRatio>
            <img className="" src={props.avatar} alt="" />
          </AspectRatio>
        </Link>
        <h2 className="">{props.name}</h2>
        <p className="text-[#575757] line-through text-[14px] font-400">
          {props.price.toLocaleString()}
        </p>
        <h3 className="font-700 text-[20px] text-[#be1f2d] font-sans-serif">
          {props.salePrice.toLocaleString()}
        </h3>
      </div>
    );
}

export default CoreProduct