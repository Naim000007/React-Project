import React from 'react'
import Edit from '../assets/edit.png'
import Delete from '../assets/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu'

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://media.istockphoto.com/id/1461625664/photo/maspalomas-dunes.jpg?s=1024x1024&w=is&k=20&c=nD1yeJuNDX-VJ9UjWJr5Wp1f7aeOh-Jjs7I2rvqlyKM=" alt="" />
                <div className="user">
                    <img src="https://media.istockphoto.com/id/1461625664/photo/maspalomas-dunes.jpg?s=1024x1024&w=is&k=20&c=nD1yeJuNDX-VJ9UjWJr5Wp1f7aeOh-Jjs7I2rvqlyKM=" alt="" />
                    <div className="info">
                        <span className='user-name'>Naim</span>
                        <p>1 hour ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`} >
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorem.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa accusamus officia id amet rem harum fugiat nemo sed consequuntur? Quibusdam beatae molestias quis. Similique!</p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, modi, voluptate iusto nesciunt quo recusandae maiores doloribus expedita nemo facere eum quis dolor enim? Quibusdam quaerat pariatur voluptatum incidunt ut. Culpa cupiditate, debitis quam eaque assumenda odio sapiente nulla veniam consequuntur corrupti quasi error. Similique culpa blanditiis dolore hic eos explicabo earum cupiditate est expedita non aspernatur enim facilis, velit tenetur facere sed quia sequi, architecto aliquam temporibus doloremque!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, natus eos soluta dolore maiores quae unde voluptatum sit, quasi omnis, sequi similique dicta quibusdam? Ducimus velit esse dicta natus, veniam placeat, modi quis ipsam sunt delectus rem. Nesciunt libero aliquam, incidunt quo voluptatibus sapiente dignissimos amet necessitatibus hic adipisci? Repellat labore facilis vel ex cum impedit iusto commodi minus!</p>
            </div>
            <Menu />
        </div>
    )
}

export default Single