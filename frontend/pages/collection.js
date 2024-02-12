import CollectionItems from "../components/elements/CollectionItems";
import LayoutFront from "../components/layout/LayoutFront";

function Bill() {
    return (
        <>
            <LayoutFront
                headTitle="Freelancers"
                pageTitle="Freelancers"
                pageTitleSub={"ChainHive Freelancers page"}
                pageClass={"front"}
                parent={"Home"}
                child={"Payments"}
            >

                <div className="collections section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="filter-tab">
                                <div className="filter-nav mb-4">
                                    <a className="active">All</a>
                                    <a>Games</a>
                                    <a>dApps</a>
                                </div>
                                <div className="row">
                                    <CollectionItems />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
}
export default Bill;
