import CoreNumberInput  from '../../../@core/components/inputs/CoreNumberInput'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function CartItem(props){
    const {item} = props;
    return (
      <div className="py-[18px] flex justify-between border-b-[1px] border-gray-500">
        <img className="w-[120px]" src={item?.avatar} alt="" />
        <h2 className="w-1/2 px-[30px]">{item?.name}</h2>
        <div className="w-[140px]">
          <CoreNumberInput quantity={item.quantity} />
        </div>
        <div className="w-[200px] flex flex-col items-end justify-between left_cartItem">
          <div>
            <p className="text-[red] font-semibold">
              {item?.salePrice.toLocaleString()}
            </p>
            <p className="line-through text-[grey]">
              {item?.price.toLocaleString()}
            </p>
          </div>
          <DeleteOutlineIcon className="bg-[#e2dede] rounded-full hover:bg-[#db5d5d] hover:text-white" />
        </div>
      </div>
    );
}
export default CartItem