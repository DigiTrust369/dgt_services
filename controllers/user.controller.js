exports.profile = async (req, res, next) => {
    try {
        const user_resp = {
            "user_adr":"0x13123",
            "balance":2411, 
            "vault":"DigiTrust"
        }
        res.json({
            code: 0,
            data: user_resp
        });
    } catch (error) {
        console.log("Error to get user profile: ", error)
        next(error);
    }
};

exports.user_portfolio = async(req, res, next)=>{
    const portfolio = {
        "user_adr": "0x6123m",
        "total_portfolio_value": 2411,
        "roi": 24,
        "risk_metrics": 8,
        "risk_guard":6
    }

    res.json({
        code: 0,
        data: portfolio
    })
}