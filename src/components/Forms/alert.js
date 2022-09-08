import Swal from 'sweetalert2'

import "./Alert.css"

export const alertMessage = () => {
    Swal.fire({
        title: '¡Thanks for your purchase!',
        text: 'We send the ticket to your email',
        width: 600,
        padding: '3em',
        color: '#1e0a3c',
        background: '#fff url(https://sweetalert2.github.io/#themesimages/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/#themesimages/nyan-cat.gif")
          left top
          no-repeat
        `

      })
}