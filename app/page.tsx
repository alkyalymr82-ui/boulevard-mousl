"use client";

import { useState } from "react";
import { supabase } from "./supabase";
export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main
        dir="rtl"
        className="min-h-screen bg-[#071410] text-white flex items-center justify-center p-6"
      >
        <div className="w-full max-w-lg text-center border border-[#c8a96b]/30 rounded-3xl p-10 bg-white/5">
<img
  src="/logo.jfif"
  alt="Boulevard Mosul - MPC"
  className="w-64 max-w-full mx-auto mb-6 rounded-lg"
/>
          <h1 className="text-3xl font-bold mb-4">
            تم تسجيل اهتمامك بنجاح
          </h1>

          <p className="text-white/60 leading-8 mb-7">
            شكراً لتسجيل اهتمامك بمشروع بوليفارد الموصل.
            سيتم التواصل معك عند بدء مرحلة المبيعات.
          </p>


          <p className="text-sm text-white/50">
            تابعنا للحصول على آخر أخبار المشروع
          </p>

          <a
  href="https://wa.me/9647508888847"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-5 bg-[#d6b56f] text-[#071410] font-bold rounded-xl px-8 py-3 hover:bg-[#e5c77e] transition"
>
  تواصل معنا عبر واتساب
</a>
        </div>
      </main>
    );
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#071410] text-white">
      <section className="min-h-screen flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

          <div>
<img
  src="/logo.jfif"
  alt="Boulevard Mosul - MPC"
  className="w-56 md:w-72 h-auto mb-6"
/>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              عنوان جديد
              <br />
              <span className="text-[#d6b56f]">للسكن في الموصل</span>
            </h1>

            <p className="text-lg text-white/65 leading-9 max-w-xl">
              التسجيل المبدئي لقائمة المهتمين بمشروع بوليفارد الموصل.
              سجّل بياناتك الآن لتكون من أوائل من يتم التواصل معهم
              عند بدء مرحلة المبيعات.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-9 max-w-lg">
              <div className="border border-white/10 rounded-2xl p-4">
                <strong className="text-[#d6b56f] text-xl">11</strong>
                <p className="text-xs text-white/50 mt-1">برج سكني</p>
              </div>

              <div className="border border-white/10 rounded-2xl p-4">
                <strong className="text-[#d6b56f] text-xl">26</strong>
                <p className="text-xs text-white/50 mt-1">طابق</p>
              </div>

              <div className="border border-white/10 rounded-2xl p-4">
                <strong className="text-[#d6b56f] text-xl">7</strong>
                <p className="text-xs text-white/50 mt-1">مساحات متنوعة</p>
              </div>
            </div>
          </div>
<div className="mt-8 mb-8">
  <img
    src="/boulevard-hero.jfif"
    alt="Boulevard Mosul"
    className="w-full h-64 md:h-80 object-cover rounded-2xl"
  />
</div>
          <div className="bg-white/[0.06] border border-white/10 rounded-3xl p-6 md:p-9 shadow-2xl">
            <div className="mb-7">
              <p className="text-[#d6b56f] text-sm mb-2">
                قائمة الاهتمام
              </p>

              <h2 className="text-2xl font-bold">
                سجّل اهتمامك
              </h2>

              <p className="text-white/50 text-sm mt-2">
                التسجيل لا يُعد حجزاً أو التزاماً بالشراء.
              </p>
            </div>

            <form
  onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const name = data.get("name");
  const phone = data.get("phone");
  const apartment = data.get("apartment");
  const purpose = data.get("purpose");
  const buyingTime = data.get("buyingTime");

  const { error } = await supabase
    .from("registrations")
    .insert([
      {
        name: name,
        phone: phone,
        apartment: apartment,
        purpose: purpose,
        buying_time: buyingTime,
      },
    ]);

  if (error) {
    alert("صار خطأ بالتسجيل، حاول مرة ثانية.");
    console.error(error);
    return;
  }

  setSubmitted(true);
}}

              className="space-y-4"
            >
              <input
                        required
                        name="name"
                type="text"
                                placeholder="الاسم الكامل"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#d6b56f]"
              />

              <input
                required
                name="phone"
                type="tel"
                placeholder="رقم الهاتف / واتساب"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#d6b56f]"
              />
<select
  required
  name="apartment"
  defaultValue=""
  className="w-full bg-[#0d211a] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#d6b56f]"
>
  <option value="" disabled>
    اختر نوع الشقة
  </option>
  <option>غرفة وصالة</option>
  <option>غرفتين وصالة</option>
  <option>3 غرف وصالة</option>
</select>
              <select
                required
                name="purpose"
                defaultValue=""
                className="w-full bg-[#0d211a] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#d6b56f]"
              >
                <option value="" disabled>
                  الغرض من الشراء
                </option>
                <option>سكن</option>
                <option>استثمار</option>
              </select>

              <select
              required
              name="buyingTime"
                defaultValue=""
                className="w-full bg-[#0d211a] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-[#d6b56f]"
              >
                <option value="" disabled>
                  متى تفكر بالشراء؟
                </option>
                <option>عند افتتاح المبيعات مباشرة</option>
                <option>خلال 3 أشهر</option>
                <option>خلال 6 أشهر</option>
                <option>أريد معرفة التفاصيل أولاً</option>
              </select>

              <label className="flex gap-3 items-start text-xs text-white/50 leading-6">
                <input required type="checkbox" className="mt-1" />
                <span>
                  أوافق على التواصل معي بخصوص مشروع بوليفارد الموصل
                  وتزويدي بالمعلومات المتعلقة بالمشروع.
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#d6b56f] hover:bg-[#e5c77e] text-[#071410] font-bold rounded-xl py-4 transition"
              >
                سجّل اهتمامي الآن
              </button>
            </form>

            <p className="text-center text-[11px] text-white/35 mt-5">
              سيتم استخدام بياناتك للتواصل معك بخصوص المشروع فقط.
            </p>
          </div>

        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center">
        <p className="text-[#d6b56f] font-semibold">
          المستشار العقاري عمر المصلاوي
        </p>

        <p className="text-white/40 text-sm mt-2">
          تابع حساباتي للحصول على تفاصيل وتحديثات المشروع
        </p>

 <div className="mt-6">
  <p className="text-white/60 text-sm mb-4">
    للاستفسار والتسجيل، تواصل معنا مباشرة
  </p>

  <div className="flex flex-wrap justify-center gap-3">

    <a
      href="https://wa.me/9647508888847"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 transition"
    >
      🟢 واتساب 0750 888 8847
    </a>

    <a
      href="https://wa.me/9647718858989"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 transition"
    >
      🟢 واتساب 0771 885 8989
    </a>

    <a
      href="https://www.instagram.com/omar_aqarat_2"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 transition"
    >
      📸 Instagram
    </a>

    <a
      href="https://snapchat.com/t/RZHmGjRI"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 transition"
    >
      👻 Snapchat
    </a>

    <a
      href="https://www.facebook.com/share/19YQsjLL6S/"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 transition"
    >
      🔵 Facebook
    </a>

  </div>
    </div>

      </footer>
    </main>
  );
}