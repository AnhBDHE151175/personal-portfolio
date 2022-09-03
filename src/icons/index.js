import Icon from "@ant-design/icons";
const FirstSkillSvg = () => (
  <svg
    width="84"
    height="84"
    viewBox="0 0 84 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g filter="url(#filter0_d_1_855)">
      <rect
        x="12"
        y="12"
        width="60"
        height="60"
        rx="8"
        fill="white"
        shape-rendering="crispEdges"
      />
      <rect x="22" y="22" width="40" height="40" fill="url(#pattern0)" />
    </g>
    <defs>
      <filter
        id="filter0_d_1_855"
        x="0"
        y="0"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_855"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_855"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1_855" transform="scale(0.0078125)" />
      </pattern>
      <image
        id="image0_1_855"
        width="128"
        height="128"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAYAAACTrr2IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5ggICigJ0BuiyQAAHZhJREFUeNrtnXtAVNXWwH97BnymXhXpYeUtNbOrdjMfXcNES0lQ9BaSeRVfacwA+fziml1FMcpEvSozIL6SzAeamuD4SkNLTLNrlo+y7GlZ4CNNRWGY/f3BDJVmwjw4M7B//wlnr73WkbXOPmevtbZAoVD4IHGWOEvduiClddLDD4MMYGVQEDCHO9u3B5oLQ+vWIOOY3qABiIbs2LMHxAu6AxMnQsrLKS/v3i20NkOhUPwRY3LH5NasCZdrXq7ZrRvovuXOHj1AthHnO3cGcYAP2rQBtpOj15ddrpzC1MJCkEKKrl1VAFAoNMVw2nD6jjtAP5T8sDCQF7CGhQGnxT8ffRQIonvNmh6YOIXgnTtVAFAoKoSYaTHT2rYFGS/jIyJA3CKPh4YC/cXc++/XQKE0OfPiRRUAFAq3EtMypuXf/gaiuWz91FNgm0VS//4gZjOreXOttfsNUQR//70KAAqFU4ySo+Rf/gLWU4XGyEigDcOiooAnxJKHH9ZauxsjsrkzI0MFAIXiT5ksJ0udDvLr5dd77DFgIQuHDQOxnpV9+wL1uaV6da21LD8CaYuMVAFAofgdju01W3trVv/+IG8Ss0aNAjGecffdp7V2buAsP165AgWNLzdt1EgFAEUVJ3pL9JZWrUA/UD8wLg44Y/v2X/8CosW42rW11u4PiCLy8mUgg8waNZwYn8jdW7eCqYF5fEiIn9bWKBQVizHTmBkUBCJN3hcfD9wpRFgYECn7CQEgxmmtIwB9aPHll0CBHJidDbqJTMzKguIuIq9dOxDAyy+XX6zsx6a33nL8SwUARSVGCDAONw7v1QuERUbHxwM7KflI11LkAJCijW6OhBzRTn70zjvAdF7JygJrpG3bxo0wX8wXX38NwKjfjoupa7wpKcmJCWOJkRL8brb+NzsbaMD2kjCiUFQShADjWePZ8HAQx1g6dSqQwbE2bTRU6lGCi4uBEyTn5ADnRfjKlVCt2+Waa9fC7E6Lxp05c2MxxkxjZrNmIHaS8/nnTuiRQPCHH4KpkTmyXTvHD9UKQOHjGOsa6/boAZzmdGIiiNGM6tBBQ4Ueoc7RoyAmyOcXLwZbF7F92TIwP2fe9+OPAOxzRqxuNhOfegpkW7o7M16e4f4VK67+qQoACh+j9B0+l7EvvQQUEf7II8Do3y+VPU5NrBcuAD/I3itXgm0enZYsgdSGqQ1zcwGYDkCke6aTO1nSvz8whuXlGniEQzYb6I/rj69adfUv1SuAwsuJs8RZbr8dbDusLZOSgAIxY9AgDRRpwsUvvgD8Za2FC6Fax8JmCxaUfQnvLLGBsYGtW4PsZ4v4+GMnBKQQvHMnmIQ5Mjj46l+qFYDCyxg/cPzA2rXhUvil8AkTwNawuNa4cUCBmOHUtld5sX8sE104bLGA7TLPzJ0L5vPm89u2lVwiZcXdD1usLXbgQBA/8aMz40Uf2Wblyuv9VgUAhRcgBMTGGKIjIqBAd+nrGTNKPnY1aVIBk9uXyAhptljANpeUhARIzUtN/fBD7e7JZDlZ+vnBqYL8Y4MGAf/HnHIJWMMKqxWsGbLP2rXAhj+6SAUAhUbE7o/df++9II/ZXl2wAORudEFBgI27PTpxO1peugQykmGLFkFxreJas2b9Zttth9Z3poT8n/N/DgsD8SJzbr21/OPlAQ5v2wZpt6Xdlpd3vatUAFBUECNHjBzh7w/+F/0vxseDnGVLevFFPJ5LX7rffhPh6elQ9JzVmpQE6UPTa588qfVduT7iDP8ZPtwFAUkkvf76DWfR2kxFZceYacz8+99BdIWFC4EEch580IMT2pf0chVr3nwT9Pv1+ydMgHmh80KPH9f6bpTtft1yC4g4nv3uOyCCp/3K8aCW03jpzBm4+JeLf2ncGJaKpeLy5etdrVYACjczcuTIkbVqgf9m/82JiYCfZNQoIKF8ravKzQ7Z7c03wXachRMnQmpgauBnn2l9N5xjyBDK7fgOxC5pW7YMlvb5M8d3oAKAwk04GmHwtVy5YgXQWw5s3RrYTo5HJnQk3EzRZY0ZAylHU8xbtmh9F1xHTJbhgwcD3eypyuUd/4het3hxWa/WaW2uwpcRAmJrGNbFxQGvydT9+4HmlDi+u4njqVOnQHwnnzMYIG9N/petW0PKkZQjlcHxYzrHdA4NBbqJsffe64SAW/lk715IqZ9S/+DBsg5SKwBFORk5YuSIgADw/7df9cWLQc5iW+/eQIabJ3Jsz23CajaDbYyUkyZB6obU1LNntb4LrlP6qnTC/8SkScCHcs+4cUAbnAyfImThQgDeLfsYFQAUZcQYaYzs2hXEM3R//XVgFjmNG7t/HjmGsZ9/DnKf3DdiBKTWSB2wcycAuVrfA3dgWG5Y3qUL6B4UfvPnA3NlTosWwF381SmB9pTkgnMF565N9b0RKgAo/gQhIEYfo58wAciXPyYmAhnk6Nz46li6TddQNnz5ZWjEqX5JSTCl2eo1hYVa3wHXKV0x1dO/MGsWsNueyrzbPfJlBx5btQoWRy6O/OWX8o5WAUBxFaVL05P6wYsWAXfKN/r3d/88cgD/ev99EJ1F52eeAdNR89HDh7W23j0IAcYOxg6DBoEYx8CZM4F5zAgIcP9c+sG2penpTmuq4V1SeBWOAyp08eKh9euB6nRv29aNE9hTU8XdBCQkwE+35//9lVdg9erVq4uLtbbedeIscZamTaG4fnH9tDQQy3j9scc8OOF4PnvtNTDdZd4+dKizQtQKoMpjOG043akT6OaK5998E6hO91tuceME/6H/118DUWLwgAGQ0tHUcc8eAJxpa+E1ODIb/br7dR83DmwTikdNmgTCUyf52AMoD4p/zJwJec/nNZg40VWhagVQZYltZ/jv0KEg7xG7UlNxe0qu7ELwqlVg3Wbd9uyzkL4gfcG5c1pb7TpxNaPDOnQAW46u+4IFeL7jkL2Tj+4D28cjRsC80LRpBw64S7gKAFWOmNkGQ3w88IUQr7ziRsHvsa2gAEQHzk2YACkLzHlzyle/5pVcs133jBwyfjzlPpSzzNiLlfhZHpk6FfJyT51KTvbUq5IKAFUCIcB40Hjw1VdBpDN//Hg3Cs+QE44fB27X9ejTB0xHTZXiY15suKFaeDjI3mJcSgrwEefuuMODEzZglcUCHBchRiOYlpuWf/ONp61UAaDS0q9fv356Pdy8qVHd1FSQg6k+YoT75Mt4/v3uu2A7ajsaEQFpIWkh1y879X5Ki3D2yfavvornOw8tkok//QSyjej5/PNg3mfel+HuZKob4sniDIUmTJb9IqpVA/Fto+w33gCa0D4qyo0TZIrV6elgzbPm9e8P88fMH1P+/WfvwLFdFxUF4heOl/TLF4ceesgDk9k7DfGJDF62DIpaFE/u0wfSstKy7B9FNUDtAlQaHO+q+Sf9EtasAfEVgT17ukGw/euznMf8MWPAbDKZU1KABSzQ2mZneC7r2febN4fiQP3K+fOBDAq7dvXghPZegrIZ90RHgzk51X/7dq3vggNVDOTzOHro+c/3e8xiAfES09zh+I66cp2/7bNu3cAcaY5M0egQDVeIs8RZqlcvqVacMgWs/9A3O3QIjzm+I7ORHeKdqVNB10r/VKtWYPY3e5HjO1DfAHyW0q/Tw/1qZWfjvj9o+7upOKnXhYSUt7rMeyhtHy75MD0d2MUvLVt6cMLRNMvNBcLFgpEjfeVjqAoAPofjiV8QcCnHYuHXvviu8jFrvvoKdBP0r3Xv7jsddBwYDAZD/fqgO0foq68C/xF3Dx8OpGASnvw7tzcikd+LYenpoL9TDrDZrr3MVqzbefIkBBwJOHL0KEwRU8QfXVexqADgM3jK8WUyM48cAVuELaJHD0jbmLbx+++1trbslFbXfSa2r1wJnKK6WzMZ3Y090MpbCR4+HMyZ5sx33tFKGRUAvB6PPfF3y8T9+6GoffG/e/YsydQ7dUpra8vObz7mXf74Y5w/Llsr0uTMixdBv9528IEHYG7v+Q85deafS6iPgF6Lx5749v17XZLf3kcf9T3Hd1Bs0zWPjcX3HN9BtBhXuzbY4vUmg0ErJVQA8Do89sT3Z8OuXcD7vB8aWvKOf/681ta6wH5xT7NmWivhOvIWGd+8uVazqwDgNXja8WUnZoWFlWznXbigtbWuI//Nt770kfK6jOLWL7/UanIVADTHmGnMvOkm5fjlRXdUd9RsprQIyed4lODiYiiuIfcv0CylSgUAzXA4Pg/xkHL88pPSLqXdp58C0WJsnz6Aji89XzzjPuRfabZgQUkNxaFDWmmhdgEqnKsdX0znlc6d3SC4ijj+9XAcppm3PW/7ffeB32jWBAa6f55ii3hh0iQX/t+a0eDsWSg6Yv3pnnu0/girAkCF4bHMvYc59d57UHDgcpPQUFg8Y/EMXy3O8WZi6sTU6dgRaCcfyM0F7qOVM81RRSFrRo/2ln4J6hXA4zie+H4v+r24eTPuc3x7kUlNS61qjz+uHN9TOKorOS03LVyI047vOMmoEGsfs1lrqxyoakCP4bGlvoP/I+z77yFZJEdevKi1tb85/fcZ/YYBA4A5LAwKAu7j9qIikEtF5Ntvg/lz8+fr1pWMkVJrrW/MKb/AdePHA9EysFUr5+VIwYNjx0L6gvTIoiKtrXKgXgHcjscd30EKwTt3gkmYI4ODtbO3dPtyWcGyDRuAGGns1u1PBtSU//f662BKTr1r8OCSH3ljIHBXpqFYTfDGjZCSZ47s1Utrq65GvQK4jQpzfC/hmryFGzm+A3unnZjxMeP79tXaij9GCCju7fdQWhpOO76jLFhmiSZjx2pt0fVQAcBlNHP8feRqUU3mroQlsVfW92jffCeJ6RHTIzqasge061GPejNngqmjqeOxY1pbdT1UAHAazZ/4gXxSkfvebs9UPMCX/v4Vp/+NMDY3Nm/ZEnha9k5Odl6Oo7pSv02/bcoUra26ESoAlBvNHf9WAoqKQHfU9o+5cz0/ncdSlCfIp3ft8rz+N6L0K/9Wtr7xBrCfo7VqOSHIntmnb2CLGDq0pNbiyhWtrbsRKgCUGcc+vshl7MaN7nN8R3We49x7x2mv19CX4HPnQP7ImcGD3X1AxLV4zPFbsH/7dmj4QuCjK1d6Tv+yciotIHraNBDJzHjgARcELRSvJSfDvIK0jfv2aW1VWVEB4IY4nhD+W/WRa9fi9rJcR3VeyobUe9PSoNoTV1o0aVLSk69vX6CmqPXEE0Bd0aRpUzCnmFNWrPCcvZ4uSqq5r9Y9ffqUdMSxWj1nx41wHHdOppg6bpwLguz7+xc2XtiYkKCdPc6htgH/FCHAmGfMW7UKxBQS+vVzXebVju8tKbsed/xTtYJDQyF5WfIyLfMWSvv/N4H9+4EMcho3dkKQfcnPYDH84YfB9Ivpl717tbPLOdS5ANcl5gVDUmIiiC1ig1saNqyVQ3fvhsuXrywJDYX0MeljvMHxHa82tujietnZwAGauSWvwJGinHc5KCwMTGmmNC3tdSQq6X/SmbKygANUb93aBYE7RM6MGWA6bDq8dKl2drmGegW4htgYQ3S/fsAg0cf101d/feLLOeIrb0rZLW0nXsvPsmkT7ktRdjzxvSxF2X+9//qUFFxf2dThs8OHfXXJfzVqBVCKwWAw3H03iH+Kbhs3AhmsdqXVlFrqa7vUdxAbbvg0OhroxIXJk10QZO/hp5tgEz16QPo9i9qePKm1da6iagFKy0jzrfnWFSuA0YyqV88FgZ+z7JNPwJpoLerdu6TcUzl+xeM4F8DWjYA5c0C44vyAXCGyYmNhXuj8YUeOaG2du1ABgNMv5IePHQviPHd06OCCoE2knjgBuhT9xtBQSA81h547p7V1VdDx7Qk9og03r1sHTGZStWouCNwj3l+6tORItNde09o6d1OFdwHiLHGWpk3B9lPx8Y8/xvkEEPv+fLHNVi8oSOsOL79S1Rz/uTMjR9x5JxS/6Rfw3nu4fpz3Fbb9739QbVj1pUFBMLvT7E4+2XrsT6nCHwFtfW19Z83Cece3I9vRffBg5fhaEWeJszRqBMX5ft23bsV1x/+A7Px84JJo/8QTldXxHVTBV4DSBJBGMiA83Hk5chovLVkC5vrm+iXHSmtLVXT8unXB1r74wqZNQAI5LVq4INCeYs1e8U1kJJiESfhSj0HnqIIrADGMO6dPd0GAvfmk9Xnr82PGaG1N1XN8h722rcUjs7KABHIefNB1uSKQJIOhxPFzcrS2sqKoQiuA2Pti7wsJAZllu9S+vTMCiJESxLu2E8OGQfrI9BAtP/JVVcd3t73iO04lJkKKyWxdtEhrKyuaKhQAZA/b+RdeAJxsxyTPc+Gtt8A0Mi1kxw7t7FCO7ybHz+bOjAxI+cZsdik/wKepAq8AhrcNb7dpg/N/OEc4ZLOB7h7dPVpmfjlSdgviLgVkZblgz9U4Unb9Lz/dq5f3OL7H7O3Ie2+9BYU9rMefeabkR97YkqxiqAIrAN37NIyOdkHAOE6uWAEp9VPqHzxY8fpXtXbinrJXDmTQ22/DxYcumvr3h6VRS4X3NOfUikq8AoizxFmqVwc6is8HDHBCgL3aS17iJS2e/FUtV9/RaMVT9lqXWJf06QNLxVJx+bLW1noLlTgAyEDrdz17AuvJcSq1d6xs8PbbJTn8X3xRcXpX1aW+aELuhg2eszc9PT390iWtrfU2KnMA+FEkR0Q4P15cYmpGRsXpq574ldte76QSBgBH3Tef81RoqBMCjvO/8+ehsG/xvevXV4C+6olfqe31biphAPA753cuKAj4gjP16zshoIGcmJnp+SWjeuJXbnt9g0oYAIggok8f54eLj/Txa9Z4Tj31xK/c9voWlTAAiK/ZGBbmxEB7N16RLJI9kQqqtvMqt72+SSUKANFbore0agV8Q+1mzco/Xj7PtE2b3N/Pvao5QlWz17epRAFA31rU693b+fFitBidleU+faqaI1Q1eysHlSgAYBBBTgUAe8JPUe2i2ps2ua5GVXMEj9lr76LsbfZWLipBAIjeEr0lMBA4T6eOHZ0QsIuxu3eX9O47dcp5PZTju9nxB17J7NnTe+ytnFSCWgC/ieJoWBjIjrTSORPQcsVt2dkAnHBm/tJqtVqXLBYLkOHm6jxLSXWeaZl5hju/cpeWR8cVz330UWCS7ulyZUza5Dvt2gEZdG/b1n32yjkiOCwMFkcunuENzVQrN5UgAMi2DLIv/f/jzHhhFuasLKAd7cozzhfLcoWAmPGGr5YuBVlgmzFoEHBIrAUgUrrh3CPn7ZWdmBUW5j3t06sGPvwKMFgOljVqAIuo1aOHEwLOsuvYMUhpl9Lu00/LPswXHR9+c+59gShxfK1Rju8F+HAAuOmRmx7p1g2IFuNq13ZCwCt8W56v/r7q+A7kZDk5Ksr9cp21Vzm+N+DDAYBkedyVpp6292RaWQKArzt+KbdxW/XqHpRfRnuV43sTPhoARMl5Bv/t1av8Y+U0XjpzBgKfDnx69+7rX1dpHN9xz6JEVG6u5+e5mtKzEZXjeyE+GAAMBoOhbVucP9b5C76wWK5/Pn1lc3wHor6on5QERBH8/fcVMKHdXm87G1HxWzQIAMZMY2ZEBMQ0NHz60UcQM9v44pkzYCwyFu3dC8a6xrp/9lFPl6PLcWXpL6JE1B8t/Sur4ztI2ZCy4YcfQH4DwcFAMxqcPeuBia6yVzm+N1OBASCmTkyd554DsZOc1auB/mLu/fdTWrYrRjOqQwcQe9mzeTPEZMRk9O9/rRxpkRZnMv7kFKYWFoJupm7m5s2//ryyO76DuFaG6MceAzFc/mPzZpwvl76BvY6lvtb2KspCBZwNOCZ3+MwGDaDQUD3txAkgiO41a5ZhYBxPnToFAS3y5zVuDHlnAubffDPo8sSP33wDpGAS5dH/rPzvtm1gWp5arUePyu/4hmqGai1agO5d8di0aUBdZjz5pBP37QbIiby4aRNYE6wJERGq9ZZvUQGJQFfaV3/ugQdABHG8TI7vYB6rAgLg9Oqbd7VoAaK1LbJzZ+BeWjjzByz7ivUbNsB4XeV0/Nj9sfvvvRfkrOKT48YB20XUkCFABn/1K/l/Nrl1wlewrVgBjW7Kf27IEJiSvnpNYWHF2atwBxUQAOQheahGDRBOLjdsrW2ta9QAMY46vXsDG53TQ0wWk995BwpCLv3iy44/WfaLqFYN8p9pVC8kBEgk0WAAec529vHHgfpikxBABE+7dWL7yUgclQcTEsBUJ3VAYmLJr6puX31fxwdSgXVP2Z6vUwfkMt38rl2B8r63ZsgJx48Dw9lgNuMzju9oay7Hy/HBwcC3tn88+STk/0zyk0+CqMHEBg2Al5jmvln/AMfHwkViyfDhYEo2J69b59EZFRWGDwQAuV4/p0cP4C75V6cSWaLEy02bAkWEN23qBoXc7PgjR4wcERAAfgf9DoaGgphHQO/eYLuj+K6QEKArwXXq/Hq9eJGJbr3B18NelUdX3ex//QtMy03LK/9puVUNHwgADJatw8OBXWhbFPprWe7TvXqVvzrPYDAY7r4b9FbxZu/eYBvGW716gdjOpi5dgGr4+/sDv7Yin1eh9r3HtoICYIh8bMoUyAs69WpyMqxevnp1cXGFaqKoMHwhAOzil5YtNZy/jGW5/fr166fXQ8A/A/4ZFAS6IBHduzfIQv4XHg5iNrOaNwdZjQgAsYzXNbTqV4pk4rp1YOuEHD8eUsekpn75pdZKKSoGXwgAWnGdpX6cJc5Sty7IjdYNISFgGyKGh4cDzWgWGlqyRG/QANjNQAABs7Q25XecIH3PHtB9aPshPh7mnUhr+O67Wiul0AYVAK7FkcK6RdQxGuHSlEvhQ4dCjM2wODwcijsUn+/SBcRGkV2tGojXWKK1yn+KSZh37ABZJIuSksDsbzZv3w5AoNaqKbRGBYBrWST3NG4MRPHyoUMlmYsA1Bc5AMJbz5J3fK03sOONN4AHxNm0NDBh4vBhwB9/rVVUeBsqAFyLY9fAW7E7ugyiz8aNQBppmZnQaHT+p1u2wBSxOlcl5CjKhgoA3st/6P/110Br8eTWrSDDZXh29u8cfdrvHH2R1gorfA8VALTjCIdsNiCT2AMHgADZLzsbbEaMWVmQekvqIx9++JvrF9ldXDm6wm2oAOB5HPvrDeW67duBVZiyskAM1/8lOxtSGqVE/vCD1koqqiYqALiPD8jOzwcekTs3bwZRwPSsLLBNFC9t2gTmyNRWFy4AjbRWVKFwoAJAuZHJzDxyBMST4smsLJBD5JDsbDCbzObdu4F93PW74hgTaVrrrFD8MSoAXMsaVlitgE5u3bsXRC8Rtno1FL8ij65dC6k1U2t+991vrrdg0VplhcI5VACA2Qw4dAikoGNWFsiHZdCWLcC7LL5wAfRv6igshMD0n5796SetlVUo3EkFdAQyHDAcCAsD3UKxwH4El29yme9Onwa6iH6xsWCKMkWtXKm1UgqFK/hgV2DNqMEdDRsC7eWDy5eXNDd9/HGtlVIoXMGDAcCYacy86SYQDUXD+HitDXUj9p564hjzEhK0VkahcAUPBACH4/MQD1ksIKbzSufOWhvqfmQMG5o311oLhcIV3BgAqorjl/IzP6sOOQrfxg27ACNHjhxZqxaIJuRu2ABMJ6dSO76DD/ggKUlrJRQKV3AhAFz9xKeyP/Hb0fLSJZC1uTk+vuTEmzVrtFZKoXAFJ7YBPbXUdxwiqQ+VSVOnan1jfsX2iS7VagWb0WY8eBBSU1NTPXKklkJR4ZQjADiW+v7D/WplZwMZFHbt6gYd7N1nCwZeyezZExbPWDzjF23bfyoUVYQyBADl+ApFZeVPAoByfIWisvMHAUA5vkJRVfhNAFCOr1BUNQSMyR2TW7MmFGZeidy8Gbednef4qs/7vB8aWrJtduGC1gYrFIpf0UHh7VceT0xEOb5CUeXQAX+Th/v2dYMs+1L/8rzL88LClOMrFN6PDlgr9gQEOC/C8cSXc8RXjz+u3vEVCt9BB3QXkb9rP11G1FJfofB1dKC7vTgvIQG4lYCiojKMcZydpxxfofBxdDDvRFrgu++CvIdW3boBLdi/fTvQl+Bz54Cz7Dp2DPhKfD19OlyYffG7kBDl+AqF7/P/0pUQwVKTwhMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDgtMDhUMTA6NDA6MDkrMDA6MDDgMPqfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA4LTA4VDEwOjQwOjA5KzAwOjAwkW1CIwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMi0wOC0wOFQxMDo0MDowOSswMDowMMZ4Y/wAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

const SecondSkillSvg = () => (
  <svg
    width="84"
    height="84"
    viewBox="0 0 84 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g filter="url(#filter0_d_1_848)">
      <rect
        x="12"
        y="12"
        width="60"
        height="60"
        rx="8"
        fill="white"
        shape-rendering="crispEdges"
      />
      <rect x="22" y="22" width="40" height="40" fill="url(#pattern0)" />
    </g>
    <defs>
      <filter
        id="filter0_d_1_848"
        x="0"
        y="0"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_848"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_848"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1_848" transform="scale(0.0078125)" />
      </pattern>
      <image
        id="image0_1_848"
        width="128"
        height="128"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const ThirdSkillSvg = () => (
  <svg
    width="84"
    height="84"
    viewBox="0 0 84 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g filter="url(#filter0_d_1_855)">
      <rect
        x="12"
        y="12"
        width="60"
        height="60"
        rx="8"
        fill="white"
        shape-rendering="crispEdges"
      />
      <rect x="22" y="22" width="40" height="40" fill="url(#pattern0)" />
    </g>
    <defs>
      <filter
        id="filter0_d_1_855"
        x="0"
        y="0"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_855"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_855"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1_855" transform="scale(0.0078125)" />
      </pattern>
      <image
        id="image0_1_855"
        width="128"
        height="128"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAYAAACTrr2IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5ggICigJ0BuiyQAAHZhJREFUeNrtnXtAVNXWwH97BnymXhXpYeUtNbOrdjMfXcNES0lQ9BaSeRVfacwA+fziml1FMcpEvSozIL6SzAeamuD4SkNLTLNrlo+y7GlZ4CNNRWGY/f3BDJVmwjw4M7B//wlnr73WkbXOPmevtbZAoVD4IHGWOEvduiClddLDD4MMYGVQEDCHO9u3B5oLQ+vWIOOY3qABiIbs2LMHxAu6AxMnQsrLKS/v3i20NkOhUPwRY3LH5NasCZdrXq7ZrRvovuXOHj1AthHnO3cGcYAP2rQBtpOj15ddrpzC1MJCkEKKrl1VAFAoNMVw2nD6jjtAP5T8sDCQF7CGhQGnxT8ffRQIonvNmh6YOIXgnTtVAFAoKoSYaTHT2rYFGS/jIyJA3CKPh4YC/cXc++/XQKE0OfPiRRUAFAq3EtMypuXf/gaiuWz91FNgm0VS//4gZjOreXOttfsNUQR//70KAAqFU4ySo+Rf/gLWU4XGyEigDcOiooAnxJKHH9ZauxsjsrkzI0MFAIXiT5ksJ0udDvLr5dd77DFgIQuHDQOxnpV9+wL1uaV6da21LD8CaYuMVAFAofgdju01W3trVv/+IG8Ss0aNAjGecffdp7V2buAsP165AgWNLzdt1EgFAEUVJ3pL9JZWrUA/UD8wLg44Y/v2X/8CosW42rW11u4PiCLy8mUgg8waNZwYn8jdW7eCqYF5fEiIn9bWKBQVizHTmBkUBCJN3hcfD9wpRFgYECn7CQEgxmmtIwB9aPHll0CBHJidDbqJTMzKguIuIq9dOxDAyy+XX6zsx6a33nL8SwUARSVGCDAONw7v1QuERUbHxwM7KflI11LkAJCijW6OhBzRTn70zjvAdF7JygJrpG3bxo0wX8wXX38NwKjfjoupa7wpKcmJCWOJkRL8brb+NzsbaMD2kjCiUFQShADjWePZ8HAQx1g6dSqQwbE2bTRU6lGCi4uBEyTn5ADnRfjKlVCt2+Waa9fC7E6Lxp05c2MxxkxjZrNmIHaS8/nnTuiRQPCHH4KpkTmyXTvHD9UKQOHjGOsa6/boAZzmdGIiiNGM6tBBQ4Ueoc7RoyAmyOcXLwZbF7F92TIwP2fe9+OPAOxzRqxuNhOfegpkW7o7M16e4f4VK67+qQoACh+j9B0+l7EvvQQUEf7II8Do3y+VPU5NrBcuAD/I3itXgm0enZYsgdSGqQ1zcwGYDkCke6aTO1nSvz8whuXlGniEQzYb6I/rj69adfUv1SuAwsuJs8RZbr8dbDusLZOSgAIxY9AgDRRpwsUvvgD8Za2FC6Fax8JmCxaUfQnvLLGBsYGtW4PsZ4v4+GMnBKQQvHMnmIQ5Mjj46l+qFYDCyxg/cPzA2rXhUvil8AkTwNawuNa4cUCBmOHUtld5sX8sE104bLGA7TLPzJ0L5vPm89u2lVwiZcXdD1usLXbgQBA/8aMz40Uf2Wblyuv9VgUAhRcgBMTGGKIjIqBAd+nrGTNKPnY1aVIBk9uXyAhptljANpeUhARIzUtN/fBD7e7JZDlZ+vnBqYL8Y4MGAf/HnHIJWMMKqxWsGbLP2rXAhj+6SAUAhUbE7o/df++9II/ZXl2wAORudEFBgI27PTpxO1peugQykmGLFkFxreJas2b9Zttth9Z3poT8n/N/DgsD8SJzbr21/OPlAQ5v2wZpt6Xdlpd3vatUAFBUECNHjBzh7w/+F/0vxseDnGVLevFFPJ5LX7rffhPh6elQ9JzVmpQE6UPTa588qfVduT7iDP8ZPtwFAUkkvf76DWfR2kxFZceYacz8+99BdIWFC4EEch580IMT2pf0chVr3nwT9Pv1+ydMgHmh80KPH9f6bpTtft1yC4g4nv3uOyCCp/3K8aCW03jpzBm4+JeLf2ncGJaKpeLy5etdrVYACjczcuTIkbVqgf9m/82JiYCfZNQoIKF8ravKzQ7Z7c03wXachRMnQmpgauBnn2l9N5xjyBDK7fgOxC5pW7YMlvb5M8d3oAKAwk04GmHwtVy5YgXQWw5s3RrYTo5HJnQk3EzRZY0ZAylHU8xbtmh9F1xHTJbhgwcD3eypyuUd/4het3hxWa/WaW2uwpcRAmJrGNbFxQGvydT9+4HmlDi+u4njqVOnQHwnnzMYIG9N/petW0PKkZQjlcHxYzrHdA4NBbqJsffe64SAW/lk715IqZ9S/+DBsg5SKwBFORk5YuSIgADw/7df9cWLQc5iW+/eQIabJ3Jsz23CajaDbYyUkyZB6obU1LNntb4LrlP6qnTC/8SkScCHcs+4cUAbnAyfImThQgDeLfsYFQAUZcQYaYzs2hXEM3R//XVgFjmNG7t/HjmGsZ9/DnKf3DdiBKTWSB2wcycAuVrfA3dgWG5Y3qUL6B4UfvPnA3NlTosWwF381SmB9pTkgnMF565N9b0RKgAo/gQhIEYfo58wAciXPyYmAhnk6Nz46li6TddQNnz5ZWjEqX5JSTCl2eo1hYVa3wHXKV0x1dO/MGsWsNueyrzbPfJlBx5btQoWRy6O/OWX8o5WAUBxFaVL05P6wYsWAXfKN/r3d/88cgD/ev99EJ1F52eeAdNR89HDh7W23j0IAcYOxg6DBoEYx8CZM4F5zAgIcP9c+sG2penpTmuq4V1SeBWOAyp08eKh9euB6nRv29aNE9hTU8XdBCQkwE+35//9lVdg9erVq4uLtbbedeIscZamTaG4fnH9tDQQy3j9scc8OOF4PnvtNTDdZd4+dKizQtQKoMpjOG043akT6OaK5998E6hO91tuceME/6H/118DUWLwgAGQ0tHUcc8eAJxpa+E1ODIb/br7dR83DmwTikdNmgTCUyf52AMoD4p/zJwJec/nNZg40VWhagVQZYltZ/jv0KEg7xG7UlNxe0qu7ELwqlVg3Wbd9uyzkL4gfcG5c1pb7TpxNaPDOnQAW46u+4IFeL7jkL2Tj+4D28cjRsC80LRpBw64S7gKAFWOmNkGQ3w88IUQr7ziRsHvsa2gAEQHzk2YACkLzHlzyle/5pVcs133jBwyfjzlPpSzzNiLlfhZHpk6FfJyT51KTvbUq5IKAFUCIcB40Hjw1VdBpDN//Hg3Cs+QE44fB27X9ejTB0xHTZXiY15suKFaeDjI3mJcSgrwEefuuMODEzZglcUCHBchRiOYlpuWf/ONp61UAaDS0q9fv356Pdy8qVHd1FSQg6k+YoT75Mt4/v3uu2A7ajsaEQFpIWkh1y879X5Ki3D2yfavvornOw8tkok//QSyjej5/PNg3mfel+HuZKob4sniDIUmTJb9IqpVA/Fto+w33gCa0D4qyo0TZIrV6elgzbPm9e8P88fMH1P+/WfvwLFdFxUF4heOl/TLF4ceesgDk9k7DfGJDF62DIpaFE/u0wfSstKy7B9FNUDtAlQaHO+q+Sf9EtasAfEVgT17ukGw/euznMf8MWPAbDKZU1KABSzQ2mZneC7r2febN4fiQP3K+fOBDAq7dvXghPZegrIZ90RHgzk51X/7dq3vggNVDOTzOHro+c/3e8xiAfES09zh+I66cp2/7bNu3cAcaY5M0egQDVeIs8RZqlcvqVacMgWs/9A3O3QIjzm+I7ORHeKdqVNB10r/VKtWYPY3e5HjO1DfAHyW0q/Tw/1qZWfjvj9o+7upOKnXhYSUt7rMeyhtHy75MD0d2MUvLVt6cMLRNMvNBcLFgpEjfeVjqAoAPofjiV8QcCnHYuHXvviu8jFrvvoKdBP0r3Xv7jsddBwYDAZD/fqgO0foq68C/xF3Dx8OpGASnvw7tzcikd+LYenpoL9TDrDZrr3MVqzbefIkBBwJOHL0KEwRU8QfXVexqADgM3jK8WUyM48cAVuELaJHD0jbmLbx+++1trbslFbXfSa2r1wJnKK6WzMZ3Y090MpbCR4+HMyZ5sx33tFKGRUAvB6PPfF3y8T9+6GoffG/e/YsydQ7dUpra8vObz7mXf74Y5w/Llsr0uTMixdBv9528IEHYG7v+Q85deafS6iPgF6Lx5749v17XZLf3kcf9T3Hd1Bs0zWPjcX3HN9BtBhXuzbY4vUmg0ErJVQA8Do89sT3Z8OuXcD7vB8aWvKOf/681ta6wH5xT7NmWivhOvIWGd+8uVazqwDgNXja8WUnZoWFlWznXbigtbWuI//Nt770kfK6jOLWL7/UanIVADTHmGnMvOkm5fjlRXdUd9RsprQIyed4lODiYiiuIfcv0CylSgUAzXA4Pg/xkHL88pPSLqXdp58C0WJsnz6Aji89XzzjPuRfabZgQUkNxaFDWmmhdgEqnKsdX0znlc6d3SC4ijj+9XAcppm3PW/7ffeB32jWBAa6f55ii3hh0iQX/t+a0eDsWSg6Yv3pnnu0/girAkCF4bHMvYc59d57UHDgcpPQUFg8Y/EMXy3O8WZi6sTU6dgRaCcfyM0F7qOVM81RRSFrRo/2ln4J6hXA4zie+H4v+r24eTPuc3x7kUlNS61qjz+uHN9TOKorOS03LVyI047vOMmoEGsfs1lrqxyoakCP4bGlvoP/I+z77yFZJEdevKi1tb85/fcZ/YYBA4A5LAwKAu7j9qIikEtF5Ntvg/lz8+fr1pWMkVJrrW/MKb/AdePHA9EysFUr5+VIwYNjx0L6gvTIoiKtrXKgXgHcjscd30EKwTt3gkmYI4ODtbO3dPtyWcGyDRuAGGns1u1PBtSU//f662BKTr1r8OCSH3ljIHBXpqFYTfDGjZCSZ47s1Utrq65GvQK4jQpzfC/hmryFGzm+A3unnZjxMeP79tXaij9GCCju7fdQWhpOO76jLFhmiSZjx2pt0fVQAcBlNHP8feRqUU3mroQlsVfW92jffCeJ6RHTIzqasge061GPejNngqmjqeOxY1pbdT1UAHAazZ/4gXxSkfvebs9UPMCX/v4Vp/+NMDY3Nm/ZEnha9k5Odl6Oo7pSv02/bcoUra26ESoAlBvNHf9WAoqKQHfU9o+5cz0/ncdSlCfIp3ft8rz+N6L0K/9Wtr7xBrCfo7VqOSHIntmnb2CLGDq0pNbiyhWtrbsRKgCUGcc+vshl7MaN7nN8R3We49x7x2mv19CX4HPnQP7ImcGD3X1AxLV4zPFbsH/7dmj4QuCjK1d6Tv+yciotIHraNBDJzHjgARcELRSvJSfDvIK0jfv2aW1VWVEB4IY4nhD+W/WRa9fi9rJcR3VeyobUe9PSoNoTV1o0aVLSk69vX6CmqPXEE0Bd0aRpUzCnmFNWrPCcvZ4uSqq5r9Y9ffqUdMSxWj1nx41wHHdOppg6bpwLguz7+xc2XtiYkKCdPc6htgH/FCHAmGfMW7UKxBQS+vVzXebVju8tKbsed/xTtYJDQyF5WfIyLfMWSvv/N4H9+4EMcho3dkKQfcnPYDH84YfB9Ivpl717tbPLOdS5ANcl5gVDUmIiiC1ig1saNqyVQ3fvhsuXrywJDYX0MeljvMHxHa82tujietnZwAGauSWvwJGinHc5KCwMTGmmNC3tdSQq6X/SmbKygANUb93aBYE7RM6MGWA6bDq8dKl2drmGegW4htgYQ3S/fsAg0cf101d/feLLOeIrb0rZLW0nXsvPsmkT7ktRdjzxvSxF2X+9//qUFFxf2dThs8OHfXXJfzVqBVCKwWAw3H03iH+Kbhs3AhmsdqXVlFrqa7vUdxAbbvg0OhroxIXJk10QZO/hp5tgEz16QPo9i9qePKm1da6iagFKy0jzrfnWFSuA0YyqV88FgZ+z7JNPwJpoLerdu6TcUzl+xeM4F8DWjYA5c0C44vyAXCGyYmNhXuj8YUeOaG2du1ABgNMv5IePHQviPHd06OCCoE2knjgBuhT9xtBQSA81h547p7V1VdDx7Qk9og03r1sHTGZStWouCNwj3l+6tORItNde09o6d1OFdwHiLHGWpk3B9lPx8Y8/xvkEEPv+fLHNVi8oSOsOL79S1Rz/uTMjR9x5JxS/6Rfw3nu4fpz3Fbb9739QbVj1pUFBMLvT7E4+2XrsT6nCHwFtfW19Z83Cece3I9vRffBg5fhaEWeJszRqBMX5ft23bsV1x/+A7Px84JJo/8QTldXxHVTBV4DSBJBGMiA83Hk5chovLVkC5vrm+iXHSmtLVXT8unXB1r74wqZNQAI5LVq4INCeYs1e8U1kJJiESfhSj0HnqIIrADGMO6dPd0GAvfmk9Xnr82PGaG1N1XN8h722rcUjs7KABHIefNB1uSKQJIOhxPFzcrS2sqKoQiuA2Pti7wsJAZllu9S+vTMCiJESxLu2E8OGQfrI9BAtP/JVVcd3t73iO04lJkKKyWxdtEhrKyuaKhQAZA/b+RdeAJxsxyTPc+Gtt8A0Mi1kxw7t7FCO7ybHz+bOjAxI+cZsdik/wKepAq8AhrcNb7dpg/N/OEc4ZLOB7h7dPVpmfjlSdgviLgVkZblgz9U4Unb9Lz/dq5f3OL7H7O3Ie2+9BYU9rMefeabkR97YkqxiqAIrAN37NIyOdkHAOE6uWAEp9VPqHzxY8fpXtXbinrJXDmTQ22/DxYcumvr3h6VRS4X3NOfUikq8AoizxFmqVwc6is8HDHBCgL3aS17iJS2e/FUtV9/RaMVT9lqXWJf06QNLxVJx+bLW1noLlTgAyEDrdz17AuvJcSq1d6xs8PbbJTn8X3xRcXpX1aW+aELuhg2eszc9PT390iWtrfU2KnMA+FEkR0Q4P15cYmpGRsXpq574ldte76QSBgBH3Tef81RoqBMCjvO/8+ehsG/xvevXV4C+6olfqe31biphAPA753cuKAj4gjP16zshoIGcmJnp+SWjeuJXbnt9g0oYAIggok8f54eLj/Txa9Z4Tj31xK/c9voWlTAAiK/ZGBbmxEB7N16RLJI9kQqqtvMqt72+SSUKANFbore0agV8Q+1mzco/Xj7PtE2b3N/Pvao5QlWz17epRAFA31rU693b+fFitBidleU+faqaI1Q1eysHlSgAYBBBTgUAe8JPUe2i2ps2ua5GVXMEj9lr76LsbfZWLipBAIjeEr0lMBA4T6eOHZ0QsIuxu3eX9O47dcp5PZTju9nxB17J7NnTe+ytnFSCWgC/ieJoWBjIjrTSORPQcsVt2dkAnHBm/tJqtVqXLBYLkOHm6jxLSXWeaZl5hju/cpeWR8cVz330UWCS7ulyZUza5Dvt2gEZdG/b1n32yjkiOCwMFkcunuENzVQrN5UgAMi2DLIv/f/jzHhhFuasLKAd7cozzhfLcoWAmPGGr5YuBVlgmzFoEHBIrAUgUrrh3CPn7ZWdmBUW5j3t06sGPvwKMFgOljVqAIuo1aOHEwLOsuvYMUhpl9Lu00/LPswXHR9+c+59gShxfK1Rju8F+HAAuOmRmx7p1g2IFuNq13ZCwCt8W56v/r7q+A7kZDk5Ksr9cp21Vzm+N+DDAYBkedyVpp6292RaWQKArzt+KbdxW/XqHpRfRnuV43sTPhoARMl5Bv/t1av8Y+U0XjpzBgKfDnx69+7rX1dpHN9xz6JEVG6u5+e5mtKzEZXjeyE+GAAMBoOhbVucP9b5C76wWK5/Pn1lc3wHor6on5QERBH8/fcVMKHdXm87G1HxWzQIAMZMY2ZEBMQ0NHz60UcQM9v44pkzYCwyFu3dC8a6xrp/9lFPl6PLcWXpL6JE1B8t/Sur4ztI2ZCy4YcfQH4DwcFAMxqcPeuBia6yVzm+N1OBASCmTkyd554DsZOc1auB/mLu/fdTWrYrRjOqQwcQe9mzeTPEZMRk9O9/rRxpkRZnMv7kFKYWFoJupm7m5s2//ryyO76DuFaG6MceAzFc/mPzZpwvl76BvY6lvtb2KspCBZwNOCZ3+MwGDaDQUD3txAkgiO41a5ZhYBxPnToFAS3y5zVuDHlnAubffDPo8sSP33wDpGAS5dH/rPzvtm1gWp5arUePyu/4hmqGai1agO5d8di0aUBdZjz5pBP37QbIiby4aRNYE6wJERGq9ZZvUQGJQFfaV3/ugQdABHG8TI7vYB6rAgLg9Oqbd7VoAaK1LbJzZ+BeWjjzByz7ivUbNsB4XeV0/Nj9sfvvvRfkrOKT48YB20XUkCFABn/1K/l/Nrl1wlewrVgBjW7Kf27IEJiSvnpNYWHF2atwBxUQAOQheahGDRBOLjdsrW2ta9QAMY46vXsDG53TQ0wWk995BwpCLv3iy44/WfaLqFYN8p9pVC8kBEgk0WAAec529vHHgfpikxBABE+7dWL7yUgclQcTEsBUJ3VAYmLJr6puX31fxwdSgXVP2Z6vUwfkMt38rl2B8r63ZsgJx48Dw9lgNuMzju9oay7Hy/HBwcC3tn88+STk/0zyk0+CqMHEBg2Al5jmvln/AMfHwkViyfDhYEo2J69b59EZFRWGDwQAuV4/p0cP4C75V6cSWaLEy02bAkWEN23qBoXc7PgjR4wcERAAfgf9DoaGgphHQO/eYLuj+K6QEKArwXXq/Hq9eJGJbr3B18NelUdX3ex//QtMy03LK/9puVUNHwgADJatw8OBXWhbFPprWe7TvXqVvzrPYDAY7r4b9FbxZu/eYBvGW716gdjOpi5dgGr4+/sDv7Yin1eh9r3HtoICYIh8bMoUyAs69WpyMqxevnp1cXGFaqKoMHwhAOzil5YtNZy/jGW5/fr166fXQ8A/A/4ZFAS6IBHduzfIQv4XHg5iNrOaNwdZjQgAsYzXNbTqV4pk4rp1YOuEHD8eUsekpn75pdZKKSoGXwgAWnGdpX6cJc5Sty7IjdYNISFgGyKGh4cDzWgWGlqyRG/QANjNQAABs7Q25XecIH3PHtB9aPshPh7mnUhr+O67Wiul0AYVAK7FkcK6RdQxGuHSlEvhQ4dCjM2wODwcijsUn+/SBcRGkV2tGojXWKK1yn+KSZh37ABZJIuSksDsbzZv3w5AoNaqKbRGBYBrWST3NG4MRPHyoUMlmYsA1Bc5AMJbz5J3fK03sOONN4AHxNm0NDBh4vBhwB9/rVVUeBsqAFyLY9fAW7E7ugyiz8aNQBppmZnQaHT+p1u2wBSxOlcl5CjKhgoA3st/6P/110Br8eTWrSDDZXh29u8cfdrvHH2R1gorfA8VALTjCIdsNiCT2AMHgADZLzsbbEaMWVmQekvqIx9++JvrF9ldXDm6wm2oAOB5HPvrDeW67duBVZiyskAM1/8lOxtSGqVE/vCD1koqqiYqALiPD8jOzwcekTs3bwZRwPSsLLBNFC9t2gTmyNRWFy4AjbRWVKFwoAJAuZHJzDxyBMST4smsLJBD5JDsbDCbzObdu4F93PW74hgTaVrrrFD8MSoAXMsaVlitgE5u3bsXRC8Rtno1FL8ij65dC6k1U2t+991vrrdg0VplhcI5VACA2Qw4dAikoGNWFsiHZdCWLcC7LL5wAfRv6igshMD0n5796SetlVUo3EkFdAQyHDAcCAsD3UKxwH4El29yme9Onwa6iH6xsWCKMkWtXKm1UgqFK/hgV2DNqMEdDRsC7eWDy5eXNDd9/HGtlVIoXMGDAcCYacy86SYQDUXD+HitDXUj9p564hjzEhK0VkahcAUPBACH4/MQD1ksIKbzSufOWhvqfmQMG5o311oLhcIV3BgAqorjl/IzP6sOOQrfxg27ACNHjhxZqxaIJuRu2ABMJ6dSO76DD/ggKUlrJRQKV3AhAFz9xKeyP/Hb0fLSJZC1uTk+vuTEmzVrtFZKoXAFJ7YBPbXUdxwiqQ+VSVOnan1jfsX2iS7VagWb0WY8eBBSU1NTPXKklkJR4ZQjADiW+v7D/WplZwMZFHbt6gYd7N1nCwZeyezZExbPWDzjF23bfyoUVYQyBADl+ApFZeVPAoByfIWisvMHAUA5vkJRVfhNAFCOr1BUNQSMyR2TW7MmFGZeidy8Gbednef4qs/7vB8aWrJtduGC1gYrFIpf0UHh7VceT0xEOb5CUeXQAX+Th/v2dYMs+1L/8rzL88LClOMrFN6PDlgr9gQEOC/C8cSXc8RXjz+u3vEVCt9BB3QXkb9rP11G1FJfofB1dKC7vTgvIQG4lYCiojKMcZydpxxfofBxdDDvRFrgu++CvIdW3boBLdi/fTvQl+Bz54Cz7Dp2DPhKfD19OlyYffG7kBDl+AqF7/P/0pUQwVKTwhMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDgtMDhUMTA6NDA6MDkrMDA6MDDgMPqfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA4LTA4VDEwOjQwOjA5KzAwOjAwkW1CIwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMi0wOC0wOFQxMDo0MDowOSswMDowMMZ4Y/wAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);
export const FirstSkillIcon = (props) => (
  <Icon component={FirstSkillSvg} {...props} />
);
export const SecondSkillIcon = (props) => (
  <Icon component={SecondSkillSvg} {...props} />
);
export const ThirdSkillIcon = (props) => (
  <Icon component={ThirdSkillSvg} {...props} />
);
