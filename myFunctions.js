const books = [
  {
    id: 1,
    title: "كتاب البرمجة",
    price: "15000 SP",
    details: "تعلم البرمجة بلغة سهلة وممتعة.",
    publisher: "دار النشر 1",
    category: "تعليمي",
    summary: "دليل شامل لتعلم البرمجة.",
  },
  {
    id: 2,
    title: "تعلم HTML",
    price: "16000 SP",
    details: "دليل شامل لتعلم HTML لبناء صفحات الويب.",
    publisher: "دار النشر 2",
    category: "تقني",
    summary: "مقدمة في تصميم المواقع.",
  },
  {
    id: 3,
    title: "JavaScript المتقدم",
    price: "17000 SP",
    details: "تقنيات متقدمة في JavaScript لتطوير تطبيقات قوية.",
    publisher: "دار النشر 3",
    category: "تقني",
    summary: "تعلم JavaScript للمتقدمين.",
  },
  {
    id: 4,
    title: "CSS ببساطة",
    price: "18000 SP",
    details: "تعلم تصميم صفحات الويب باستخدام CSS.",
    publisher: "دار النشر 4",
    category: "تصميم",
    summary: "مقدمة في التصميم باستخدام CSS.",
  },
  {
    id: 5,
    title: "أساسيات التصميم",
    price: "19000 SP",
    details: "مبادئ أساسية لتصميم واجهات المستخدم.",
    publisher: "دار النشر 5",
    category: "تصميم",
    summary: "تعلم الأساسيات لتصميم UX/UI.",
  },
  {
    id: 6,
    title: "دليل المطور",
    price: "20000 SP",
    details: "نصائح وأدوات لتحسين أداء المطور.",
    publisher: "دار النشر 6",
    category: "مهني",
    summary: "مرجع شامل لتحسين مهارات البرمجة.",
  },
  {
    id: 7,
    title: "الذكاء الاصطناعي",
    price: "21000 SP",
    details: "فهم أسس وتقنيات الذكاء الاصطناعي.",
    publisher: "دار النشر 7",
    category: "تقني",
    summary: "مدخل إلى عالم الذكاء الاصطناعي.",
  },
  {
    id: 8,
    title: "تعلم Python",
    price: "15000 SP",
    details: "مدخل إلى البرمجة باستخدام Python.",
    publisher: "دار النشر 8",
    category: "تقني",
    summary: "Python: لغة برمجة سهلة وفعالة.",
  },
  {
    id: 9,
    title: "برمجة الألعاب",
    price: "16000 SP",
    details: "إنشاء ألعاب باستخدام محركات البرمجة.",
    publisher: "دار النشر 9",
    category: "تقني",
    summary: "تعلم إنشاء ألعاب ثلاثية الأبعاد.",
  },
  {
    id: 10,
    title: "تحليل البيانات",
    price: "17000 SP",
    details: "أدوات وتقنيات لتحليل البيانات.",
    publisher: "دار النشر 10",
    category: "بيانات",
    summary: "تعلم أساسيات تحليل البيانات.",
  },
  {
    id: 11,
    title: "تطوير التطبيقات",
    price: "18000 SP",
    details: "تصميم وتطوير تطبيقات الأجهزة المحمولة.",
    publisher: "دار النشر 11",
    category: "تقني",
    summary: "مقدمة في تطوير تطبيقات الهاتف.",
  },
  {
    id: 12,
    title: "علوم الحاسوب",
    price: "19000 SP",
    details: "مفاهيم أساسية في علوم الحاسوب.",
    publisher: "دار النشر 12",
    category: "تعليمي",
    summary: "تعرف على أساسيات علوم الحاسوب.",
  },
];

function populateTable(books) {
  const tbody = $("#books-tbody");
  books.forEach((book) => {
    const row = `
        <tr class="book-row" data-id="${book.id}">
          <td>${book.id}</td>
          <td>${book.title}</td>
          <td>${book.price}</td>
          <td>
            <input type="checkbox" class="details-checkbox" data-id="${
              book.id
            }" />
          </td>
          <td><input type="radio" name="selectedBook" value='${JSON.stringify(
            book
          )}' /></td>
        </tr>
      `;
    tbody.append(row);
  });
}

function handleCheckboxToggle() {
  $(document).on("change", ".details-checkbox", function () {
    const isChecked = $(this).is(":checked");
    const bookId = $(this).data("id");
    const book = books.find((b) => b.id === bookId);
    const row = $(this).closest("tr");

    if (isChecked) {
      const detailsRow = `
        <tr class="details-row" data-id="${bookId}">
          <td colspan="5" style="text-align: right; padding: 10px; background-color: #f9f9f9;">
            <div style="display: flex; gap: 20px; direction: rtl; align-items: center; justify-content: space-between;">
              
              <div>
                <p><strong>الناشر:</strong> ${book.publisher}</p>
                <p><strong>تصنيف الكتاب:</strong> ${book.category}</p>
                <p><strong>ملخص:</strong> ${book.summary}</p>
                <p><strong>التفاصيل:</strong> ${book.details}</p>
              </div>
              
            </div>
          </td>
        </tr>
      `;

      row.after(detailsRow);
    } else {
      $(`.details-row[data-id="${bookId}"]`).remove();
    }
  });
}

$("#continueButton").on("click", function () {
  const selectedBook = $("input[name='selectedBook']:checked").val();
  if (!selectedBook) {
    alert("يرجى اختيار كتاب قبل المتابعة.");
    return;
  }
  $("#buyFormModal").fadeIn();
});
$("#buyForm").on("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: $("#name").val(),
    nationalId: $("#nationalId").val(),
    dob: $("#dob").val(),
    mobile: $("#mobile").val(),
    email: $("#email").val(),
    selectedBook: JSON.parse($("input[name='selectedBook']:checked").val()),
  };

  if (formData.name && formData.nationalId && formData.email) {
    $("#buyFormModal").fadeOut();

    // Show success window
    const successWindow = $(`
      <div style="text-align: center; margin-top: 50px;">
        <h2>تم إرسال البيانات بنجاح</h2>
        <h3>الكتاب المختار:</h3>
        <p>رمز الكتاب: ${formData.selectedBook.id}</p>
        <p>العنوان: ${formData.selectedBook.title}</p>
        <p>السعر: ${formData.selectedBook.price}</p>
        <p>التفاصيل: ${formData.selectedBook.details}</p>
        <button id="backToProducts" style="margin-top: 20px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
      العودة إلى صفحة المنتجات
    </button>
      </div>
    `);

    $("body").html(successWindow); // Replace the page content with success message
  } else {
    alert("حدث خطأ في إدخال البيانات. يرجى المحاولة مرة أخرى.");
  }
  $("#backToProducts").on("click", function () {
    location.reload(); // Reload the page to show the products page again
  });
});

$(document).ready(() => {
  populateTable(books);
  handleCheckboxToggle();
  handleRadioSelection();

  $("#cart-form").hide();
});
