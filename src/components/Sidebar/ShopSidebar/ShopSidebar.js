import React from 'react';
import './ShopSidebar.css';

const ShopSidebar = () => {
    return (
        <>
            <div className="shop-widget">
                <h3 className="shop-widget-title">Search Product</h3>
                <input type="text" />
            </div>
            <div className="shop-widget">
                <h3 className="shop-widget-title">Categories</h3>
                
                <ul className="widget-list checklist">
                    <li><input type="checkbox" id="Man" /><label htmlFor="Man">Man</label></li>
                    <li><input type="checkbox" id="Women" /><label htmlFor="Women">Women</label></li>
                    <li><input type="checkbox" id="Baby" /><label htmlFor="Baby">Man</label></li>
                    <li><input type="checkbox" id="Electronice" /><label htmlFor="Electronice">Electronice</label></li>
                    <li><input type="checkbox" id="Ciramic" /><label htmlFor="Ciramic">Ciramic</label></li>
                </ul>
            </div>
            <div className="shop-widget">
                <h3 className="shop-widget-title">Brands</h3>
                
                <ul className="widget-list checklist">
                    <li><input type="checkbox" id="Apple" /><label htmlFor="Apple">Apple</label></li>
                    <li><input type="checkbox" id="Sumsung" /><label htmlFor="Sumsung">Sumsung</label></li>
                    <li><input type="checkbox" id="Jenas" /><label htmlFor="Jenas">Jenas</label></li>
                    <li><input type="checkbox" id="Nokia" /><label htmlFor="Nokia">Nokia</label></li>
                    <li><input type="checkbox" id="Symphony" /><label htmlFor="Symphony">Symphony</label></li>
                </ul>
            </div>
            <div className="shop-widget">
                <h3 className="shop-widget-title">Tags</h3>
                
                <ul className="widget-list tag-list">
                    <li><a href="">Eid</a></li>
                    <li><a href="">Puja Parbon</a></li>
                    <li><a href="">Baishaki</a></li>
                    <li><a href="">Kurbani Eid</a></li>
                    <li><a href="">Covid 19</a></li>
                </ul>
            </div>  
        </>
    )
};

export default ShopSidebar;
