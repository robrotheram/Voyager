import React from 'react';
import CardTitles from '../cards/CardTitles';
import SimpleChart from '../components/SimpleChart';
import CardD3Map from '../cards/CardD3Map';
import CardStats from '../cards/CardStats';

const Dashboard = React.createClass({
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <CardTitles color="turquoise" img="Minecraft%20Main%20Character" title="title" value="123"/>
                    </div>
                    <div className="col-lg-3">
                       <CardTitles color="river" img="Minecraft%20Pickaxe-100" title="title" value="123"/>
                    </div>
                    <div className="col-lg-3">
                       <CardTitles color="alizarine" img="Crafting%20Table-100" title="title" value="123"/>
                    </div>
                    <div className="col-lg-3">
                        <CardTitles color="amethyste" img="Center%20Direction" title="title" value="123"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <SimpleChart color="emeralde"/>
                    </div>
                    <div className="col-lg-4">
                        <SimpleChart color="cyan"/>
                    </div>
                    <div className="col-lg-4">
                        <SimpleChart color="bluegrey"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <CardD3Map color="river"/>
                    </div>
                    <div className="col-lg-5">
                        <CardStats/>
                    </div>
                </div>
            </div>
        );
    }
});
export default Dashboard;
