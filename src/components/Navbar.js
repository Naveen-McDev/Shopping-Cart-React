import React  from 'react'

const navbar = ({cartItems, total}) => {

  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">

                <h1 class="navbar-brand">MY BAG</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <span class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</span>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><span class="dropdown-item" >All Products</span></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><span class="dropdown-item" >Popular Items</span></li>
                                <li><span class="dropdown-item" >New Arrivals</span></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark mx-2" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{cartItems.length}</span>
                        </button>
                        <button class="btn btn-outline-dark" type="submit">
                        <i class="bi bi-currency-rupee"></i>
                            bill
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{total}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
  )
}

export default navbar