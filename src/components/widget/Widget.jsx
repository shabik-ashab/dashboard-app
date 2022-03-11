import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Widget = () => {
  return (
    <div className='widget'>
        <div className="left">
           <div className="title">Users</div>
           <div className="counter">22545</div>
           <div className="link">See all user</div>    
        </div>
        <div className="right">
            <div className="percentage">
                <KeyboardArrowUpIcon />
                20%</div>
                <PersonOutlineOutlinedIcon className='icon' />

        </div>
    </div>
  )
}

export default Widget