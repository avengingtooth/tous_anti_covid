function Details(){
    return(
        <div className="qrCodeDetails">
            <div>
                <p className="favoriteCertificateText">Certificat favori</p>
                {/* TODO change to variable depeneding on who is signed in */}
                <h2 id="qrCodeOwnerName">VICTOIRE MISSONNIER</h2>
            </div>
            <p className="clickToShow">Appuyez pour l'afficher</p>
        </div>
    )
}

export default Details