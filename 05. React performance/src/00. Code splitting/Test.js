import React from "react";

function sleep(time) {
  const date = new Date();
  let currentDate = null;
  do {
    currentDate = new Date();
  } while (currentDate - date < time);
}

const Test = () => {
  return (
    <div>
      {sleep(4000)}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
      aliquam nihil inventore tenetur sint quisquam accusantium reprehenderit
      labore illo blanditiis sit iste iusto tempora sequi voluptatem qui dolore
      eligendi, repellat vitae. Dicta, ab. Error, ad minus. Beatae incidunt
      neque asperiores aperiam dolores, repudiandae quisquam quibusdam illo
      dicta tempora quaerat illum suscipit fugiat sit at architecto corporis
      laborum minus molestiae nam eligendi. Quas optio architecto mollitia
      animi? Perferendis, enim accusamus eius facere magnam voluptatem animi
      quisquam, tempore sed quia commodi assumenda officia non iusto sit. Fuga,
      voluptatum numquam quaerat, ducimus deleniti saepe minus dolore
      reiciendis, animi pariatur cupiditate at impedit beatae.
    </div>
  );
};

export default Test;
